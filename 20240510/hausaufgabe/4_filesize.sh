#!/bin/bash

#Author:Christian Fröchtenicht fc1(at)gmx.net
#License: MIT
#Version: 1.0.0
#CreateDate: 2024/05/11 ISO
#EditDate: 2024/05/11 ISO
#Name: filesize
#Description: ask the user for a filename and output the file size, size is human readable

echo "filename: "
read filename
filesize=$(ls -lha ./$filename | awk -F ' ' '{print $5}')
echo "filesize: $filesize"
