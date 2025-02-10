# /etc/cyclebackup/backup.conf erstellen und mit folgendem Inhalt füllen:
# name:source:destination:cycle:storagetime
# Beispiel:
# homedir:/home:/backup:24:168
# Erklärung:
# name: Name des Backups
# source: Quelle des Backups
# destination: Ziel des Backups
# cycle: Intervall in Stunden, in dem ein neues Backup erstellt wird
# storagetime: Zeit in Stunden, die ein Backup gespeichert wird

# diese datei in /etc/cron.hourly/backup.sh kopieren
# chmod +x /etc/cron.hourly/backup.sh
# oder selber per sudo crontab -e hinzufügen: 0 * * * * /pfad zum script/backup.sh

# ein log wird in /var/log/backup.log erstellt

timestampFormat="%Y-%m-%d_%H:%M:%S"
timestamp=$(date +"$timestampFormat")
timespampRegex="^.*[0-9]{4}-[0-9]{2}-[0-9]{2}_[0-9]{2}:[0-9]{2}:[0-9]{2}\.tar\.gz$"

log() {
	message=$1
	echo "$(date +"$timestampFormat") $message" >>"/var/log/backup.log"
}

findBackupsInPath() {
	path="$1"
	for file in $(ls "$path" | grep -E "$timestampRegex" ); do
		echo "$path""/""$file"
	done
}

createBackupFileFromSource() {
	source=$1
	newfilename=$2
	log "Creating backup file $newfilename from $source"
	tar -czf "$newfilename" "$source" 2>/dev/null
	if [ $? -ne 0 ]; then
		log "Error creating backup file $newfilename from $source"
		return
	fi
	log "Backup file $newfilename created"

}

deleteOldBackupFiles() {
	path=$1
	files=$(findBackupsInPath $path)
	for file in $files; do
		timestamp=$(echo $file | sed "s/.*\([0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}_[0-9]\{2\}:[0-9]\{2\}:[0-9]\{2\}\)\.tar\.gz/\1/" | sed "s/_/ /")
		timestampdate=$(date -d "$timestamp" +"%s")
		now=$(date +"%s")
		diff=$((($now - $timestampdate) / 3600))
		if [ $diff -ge $storagetime ]; then
			rm "$file"
			log "Backup file $file deleted"
		fi
	done
}

if [ -e "/etc/cyclebackup/backup.conf" ]; then
	for line in $(cat /etc/cyclebackup/backup.conf | grep -Ev "#" | grep .); do
		name=$(echo $line | cut -d ":" -f 1)
		source=$(echo $line | cut -d ":" -f 2)
		destination=$(echo $line | cut -d ":" -f 3)"/"$(echo $name | sed "s/\/$//")
		cycle=$(echo $line | cut -d ":" -f 4)
		storagetime=$(echo $line | cut -d ":" -f 5)
		newfilename=$(echo $destination | sed "s/\/$//")"/"$name"_"$timestamp".tar.gz"
		yungestbackupfile=$(ls -tr $destination | grep -E $timespampRegex | tail -n 1)
		#extreact timestamp from filename
		yungestbackupfiletimestamp=$(echo $yungestbackupfile | sed "s/.*\([0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}_[0-9]\{2\}:[0-9]\{2\}:[0-9]\{2\}\)\.tar\.gz/\1/" | sed "s/_/ /")
		#calculate diff from timestamp to now
		yungestbackupfiletdate=$(date -d "$yungestbackupfiletimestamp" +"%s")
		now=$(date +"%s")
		diff=$((($now - $yungestbackupfiletdate) / 3600))
		if [ $diff -ge $cycle ]; then
			createBackupFileFromSource "$source" "$newfilename"
		fi
		deleteOldBackupFiles $destination
	done
fi
