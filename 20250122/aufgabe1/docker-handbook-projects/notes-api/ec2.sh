#!/bin/bash

# Überprüfen, ob ein Tag-Name als Argument übergeben wurde
if [ -z "$1" ]; then
  TAG_NAME="MeinEC2Instance" # Standard-Tag-Name
else
  TAG_NAME="$1"
fi

# Variablen
AMI_ID="ami-07eef52105e8a2059" # Beispiel-AMI-ID
INSTANCE_TYPE="t2.micro"
KEY_NAME="universal"
SECURITY_GROUP="mein-sicherheitsgruppe"
REGION="eu-central-1" # Beispiel für Frankfurt
USER_DATA_FILE="userdata.sh"

# Überprüfen, ob die Sicherheitsgruppe bereits existiert
SECURITY_GROUP_ID=$(aws ec2 describe-security-groups --group-names $SECURITY_GROUP --region $REGION --query "SecurityGroups[0].GroupId" --output text 2>/dev/null)

if [ -z "$SECURITY_GROUP_ID" ]; then
  # Sicherheitsgruppe erstellen
  VPC_ID=$(aws ec2 describe-vpcs --region $REGION --query "Vpcs[0].VpcId" --output text)
  SECURITY_GROUP_ID=$(aws ec2 create-security-group --group-name $SECURITY_GROUP --description "$TAG_NAME" --vpc-id $VPC_ID --region $REGION --query 'GroupId' --output text)
  echo "Sicherheitsgruppe '$SECURITY_GROUP' erstellt mit ID: $SECURITY_GROUP_ID"

  # SSH-Zugriff (Port 22) in der Sicherheitsgruppe erlauben
  MY_IP=$(curl -s https://checkip.amazonaws.com)
  aws ec2 authorize-security-group-ingress --group-id $SECURITY_GROUP_ID --protocol tcp --port 22 --cidr 0.0.0.0/0 --region $REGION
  echo "SSH-Zugriff für $MY_IP/32 in Sicherheitsgruppe '$SECURITY_GROUP' erlaubt."

  # HTTP-Zugriff (Port 3000) in der Sicherheitsgruppe erlauben
  aws ec2 authorize-security-group-ingress --group-id $SECURITY_GROUP_ID --protocol tcp --port 3000 --cidr 0.0.0.0/0 --region $REGION
  echo "HTTP-Zugriff auf Port 3000 in Sicherheitsgruppe '$SECURITY_GROUP' erlaubt."
else
  echo "Sicherheitsgruppe '$SECURITY_GROUP' existiert bereits mit ID: $SECURITY_GROUP_ID"

  # Überprüfen und hinzufügen fehlender Regeln
  EXISTING_RULES=$(aws ec2 describe-security-groups --group-ids $SECURITY_GROUP_ID --region $REGION --query "SecurityGroups[0].IpPermissions")
  if [[ $EXISTING_RULES != *"22"* ]]; then
    MY_IP=$(curl -s https://checkip.amazonaws.com)
    aws ec2 authorize-security-group-ingress --group-id $SECURITY_GROUP_ID --protocol tcp --port 22 --cidr $MY_IP/32 --region $REGION
    echo "SSH-Zugriff für $MY_IP/32 in Sicherheitsgruppe '$SECURITY_GROUP' erlaubt."
  fi
  if [[ $EXISTING_RULES != *"3000"* ]]; then
    aws ec2 authorize-security-group-ingress --group-id $SECURITY_GROUP_ID --protocol tcp --port 3000 --cidr 0.0.0.0/0 --region $REGION
    echo "HTTP-Zugriff auf Port 3000 in Sicherheitsgruppe '$SECURITY_GROUP' erlaubt."
  fi
fi

# User Data Script erstellen, um Docker zu installieren und Skripte auszuführen
cat <<EOF >$USER_DATA_FILE
#!/bin/bash
# Update und Installation von Docker
apt-get update -y
apt-get install -y make docker.io
systemctl start docker
systemctl enable docker

# Benutzer 'ubuntu' zur 'docker'-Gruppe hinzufügen
usermod -aG docker ubuntu

EOF

EXISTING_INSTANCE_ID=$(aws ec2 describe-instances \
  --filters "Name=tag:Name,Values=$TAG_NAME" "Name=instance-state-name,Values=pending,running,stopping,stopped" \
  --region $REGION \
  --query "Reservations[].Instances[].InstanceId" \
  --output text)

if [ -n "$EXISTING_INSTANCE_ID" ]; then
  INSTANCE_ID=$EXISTING_INSTANCE_ID
  echo "EC2-Instanz ist vorhanden mit ID: $INSTANCE_ID"
  read -p "Möchten Sie die vorhandene Instanz löschen (d) oder weiterverwenden (w)? [d/w]: " USER_CHOICE
  if [ "$USER_CHOICE" == "d" ]; then
    aws ec2 terminate-instances --instance-ids $EXISTING_INSTANCE_ID --region $REGION
    echo "Warte, bis die Instanz beendet ist..."
    aws ec2 wait instance-terminated --instance-ids $EXISTING_INSTANCE_ID --region $REGION
    echo "Instanz wurde gelöscht."
    INSTANCE_ID=$(aws ec2 run-instances --image-id $AMI_ID --instance-type $INSTANCE_TYPE --key-name $KEY_NAME --security-group-ids $SECURITY_GROUP_ID --user-data file://$USER_DATA_FILE --region $REGION --query 'Instances[0].InstanceId' --output text)
    echo "EC2-Instanz gestartet mit ID: $INSTANCE_ID"
  else
    echo "Verwende die vorhandene Instanz mit ID: $INSTANCE_ID"
  fi

else
  # EC2-Instanz starten
  INSTANCE_ID=$(aws ec2 run-instances --image-id $AMI_ID --instance-type $INSTANCE_TYPE --key-name $KEY_NAME --security-group-ids $SECURITY_GROUP_ID --user-data file://$USER_DATA_FILE --region $REGION --query 'Instances[0].InstanceId' --output text)
  echo "EC2-Instanz gestartet mit ID: $INSTANCE_ID"
fi
# Tag zur Instanz hinzufügen
aws ec2 create-tags --resources $INSTANCE_ID --tags Key=Name,Value=$TAG_NAME --region $REGION
echo "Tag 'Name=$TAG_NAME' zur Instanz hinzugefügt."

# Warten, bis die Instanz den Status 'running' erreicht
echo "Warte, bis die Instanz den Status 'running' erreicht..."
aws ec2 wait instance-running --instance-ids $INSTANCE_ID --region $REGION
echo "Instanz ist jetzt im Status 'running'."

# Öffentliche IP-Adresse der Instanz abrufen
PUBLIC_IP=$(aws ec2 describe-instances --instance-ids $INSTANCE_ID --region $REGION --query 'Reservations[0].Instances[0].PublicIpAddress' --output text)
echo "Öffentliche IP-Adresse der Instanz: $PUBLIC_IP"

# Warten, bis SSH verfügbar ist
echo "Warte auf SSH-Verfügbarkeit..."
while ! ssh -o StrictHostKeyChecking=no -i ~/.ssh/$KEY_NAME.pem ubuntu@$PUBLIC_IP 'echo SSH verbunden'; do
  sleep 5
done

function is_docker_installed {
  ssh -o StrictHostKeyChecking=no -i ~/.ssh/$KEY_NAME.pem ubuntu@$PUBLIC_IP "command -v docker ps &> /dev/null"
  return $?
}

# Warte, bis Docker auf der entfernten Instanz installiert ist
while ! is_docker_installed; do
  echo "Docker ist auf der entfernten Instanz noch nicht installiert. Überprüfe erneut in 5 Sekunden..."
  sleep 5
done

function is_make_installed {
  ssh -o StrictHostKeyChecking=no -i ~/.ssh/$KEY_NAME.pem ubuntu@$PUBLIC_IP "command -v make &> /dev/null"
  return $?
}

if ! is_make_installed; then
  # Make installieren
  ssh -i ~/.ssh/$KEY_NAME.pem -o StrictHostKeyChecking=no ubuntu@$PUBLIC_IP "sudo apt-get install -y make"
fi

# Dateien auf die Instanz kopieren
scp -r -i ~/.ssh/$KEY_NAME.pem -o StrictHostKeyChecking=no * ubuntu@$PUBLIC_IP:/home/ubuntu/
echo "Dateien auf die Instanz kopiert."

# Berechtigungen für die Skripte setzen und ausführen
ssh -i ~/.ssh/$KEY_NAME.pem -o StrictHostKeyChecking=no ubuntu@$PUBLIC_IP "chmod +x /home/ubuntu/build.sh /home/ubuntu/boot.sh" &&
  ssh -i ~/.ssh/$KEY_NAME.pem -o StrictHostKeyChecking=no ubuntu@$PUBLIC_IP "make build" &&
  ssh -i ~/.ssh/$KEY_NAME.pem -o StrictHostKeyChecking=no ubuntu@$PUBLIC_IP "make start"

# Ausgabe der IP-Adresse mit Port 3000
echo "Die Anwendung ist erreichbar unter: http://$PUBLIC_IP:3000"
