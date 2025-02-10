#!/bin/bash

# this is an array with 5 names as string

NAMES="Macus Alex Armin Christian Dimitri"

for name in $NAMES; do
    echo "Hello $name!"
done
echo "thats all folks!"