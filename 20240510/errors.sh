#!/bin/bash

# wenn die Anzahl der Argumente 1 ist, dann führe das skript aus, sonst brich ab

if [ $# -ne 1 ]
then
	echo "Bitte exakt ein Argument eingeben!" >&2
	exit 1
fi
username=$1
echo "Hallo $username"
