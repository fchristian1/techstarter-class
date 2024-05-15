#!/bin/bash

#Author:Christian Fröchtenicht fc1(at)gmx.net
#License: MIT
#Version: 1.0.0
#CreateDate: 20240513 ISO
#EditDate: 20240513 ISO
#Name: dc - directory count
#Description: count the files and directorys in a given path

if [ $# -ne 1 ]
then
	echo "give a path"
	echo "$0 [path]"
	exit 0
fi


count=$(ls -lA $1 | wc -l)

echo $(($count - 1))
