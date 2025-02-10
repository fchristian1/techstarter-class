#!/bin/bash

# gib ein argument mit, das der genaue Dateiname der Datei im Downloads-Ordner (Windows) ist
if [ $# -ne 1 ]
then
	echo "Bitte einen Dateinamen mitgeben" >&2
	exit 1
fi

# versuche mit find die Datei zu finden, brich ab, falls exit code eine fehlende Datei anzeigt
####################--- Username ändern ---################
windows_username=$(powershell.exe '$env:UserName' | tr -d "\r")
file=/mnt/c/Users/$windows_username/Downloads/$1
find $file >/dev/null
if [ $? -ne 0 ]
then
	echo "Der Dateiname $1 existiert nicht" >&2
	exit 2
fi
cp $file ./
