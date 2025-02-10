#!/bin/bash

# an array with ten elements
array=(
    "Ein Lächeln ist die schönste Sprache der Welt."
    "Glaube an dich selbst, und alles ist möglich."
    "Der Weg zum Erfolg beginnt mit dem ersten Schritt."
    "Mutig zu sein bedeutet nicht, keine Angst zu haben, sondern Angst zu überwinden."
    "Die größten Abenteuer beginnen mit einem einzigen Gedanken."
    "Ein offenes Herz öffnet Türen zu unendlichen Möglichkeiten."
    "Das Geheimnis des Glücks liegt im Genießen des Augenblicks."
    "Kleine Dinge können große Freude bringen."
    "Ein freundliches Wort kann den Tag erhellen."
    "Träume groß und wage es, sie Wirklichkeit werden zu lassen."
)
echo ${array[ $(( $RANDOM % ${#array[@]} )) ]}

#echo ${#array[@]}
