#!/bin/bash

# Kommentare sind wichtig!
# echo "Hello world!" # Zeile mit Befehl und Kommentar


# Variablen deklarieren:
username="Lukas Probst"
echo "Hallo $username" 
echo 'Hallo $username'

# Variablen die nicht existieren erzeugen keine Fehlermeldung:
# echo "Hallo $existiertnicht"


# Variablen sind Bausteine:
username2="Christian Fröchtenicht"
echo "Hallo $username und $username2"
username="Lukas Buchmeier"
echo $username
username=$username2
echo $username


# Variablen werden als Zeichenketten gespeichert:
x=5
y=6
echo $x+$y
# Für mathematische Auswertung brauchen wir eine bestimmte Syntax:
echo $(($x + $y))
