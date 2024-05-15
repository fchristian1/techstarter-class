#!/bin/bash

#Author:Christian Fröchtenicht fc1(at)gmx.net
#License: MIT
#Version: 1.0.0
#CreateDate: 20240513 ISO
#EditDate: 20240513
#Name: bf - bigges file
#Description: give me the name of the biggest file in the current directory

#ls -lS
#head -n 1
#awk -F " " {print $... } for the filename

if [ $# -ne 1 ]
then 
	echo "give a path on"
	echo "$0 [path]"
	exit 1
fi

ls -lS $1 | head -n 2 | tail -n 1 | awk -F ' ' '{print $9}'
