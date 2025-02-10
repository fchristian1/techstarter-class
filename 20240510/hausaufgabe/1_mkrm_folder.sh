#!/bin/bash
#Author:Christian Fröchtenicht fc1(at)gmx.net
#License: MIT
#Version: 1.0.0
#CreateDate: 2024/05/10 ISO
#EditDate: 2024/05/11 ISO
#Name: mkrm_folder - make remove folder 
#Description: make a folder and remove the folder in the current path

folderName="testverzeichnis"
mkdir $folderName
echo "Verzeichnis erstellt"
rmdir $folderName
echo "Verzeichnis gelöscht"
exit 0
