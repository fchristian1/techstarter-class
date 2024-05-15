#!/bin/bash

# a friendly script tu greet users

if [ $# -eq 0 ]; then
    echo "Please enter at least one user to greet."
    exit 1
else
    echo "Hello $@!"
    exit 0
fi