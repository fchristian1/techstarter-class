# wenn die anzahl der aurgumente <= 2,
# dann gebe all eargument auf der console aus,
# sonst gebt "zu viele Argumente" auf der console aus

if [ $# -le 2 ]
then
	echo "Hier sind die Argumente $@"
else
	echo "zu viele Argumente!"
fi
