#!/bin/bash

# A simple script to great a singel user.

if [ $# -eq 1 ]; then
    username=$1
    echo "Hello $username!"
    echo "Please check the EXIT CODE with 'echo \$?'"
    exit 0
else
    echo "Please enter only one argument."
    echo "Please check the EXIT CODE with 'echo \$?'"
    exit 1
fi
echo "Number of arguments: $#."