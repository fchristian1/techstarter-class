#!/bin/bash

# Wenn die Anzahl der Argumente 1 is, dann führe das script weiter aus

if [ $# -eq 1 ]
then
	echo "yes"
else
	echo "no"
fi

# variablen werden asl zahlen interpritiert mit -eq und co:
x=4
y=5

if [ $x -eq $y ]
then
	echo "equal"
else
	echo "not equal"
fi
echo "hier geht es weiter"
