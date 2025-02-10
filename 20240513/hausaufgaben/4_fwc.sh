#!/bin/bash

#Author:Christian Fröchtenicht fc1(at)gmx.net
#License: MIT
#Version: 1.0.0
#CreateDate: 20240513 ISO
#EditDate: 20240513 ISO
#Name: fwc - file word count
#Description: expect a filename and print the wordcount out

if [ $# -ne 1 ]
then 
	echo " give me a filename "
	exit 0
fi

wordcount=$(cat $1 | wc -w)
echo $wordcount
