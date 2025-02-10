#!/bin/bash

# Kommentare sind wichtig
echo "Hello, World!" # Zeile mit Befehl und Kommentar

# VAriablen deklarieren:
username=Christian

echo "Hallo $username"

# Variablen die nicht existieren geben nichts zurück
echo "ich existiere nicht $username2"

# Variablen werden als Zeichenketten gespeichert:
x=5
y=6
echo $x+$y

# Für mathematische Auswertungen brauchen wir eine bestimmte Syntax:
echo $(($x+$y))
