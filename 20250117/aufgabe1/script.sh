#!/bin/bash
echo $(date +%Y-%m-%d_%H:%M:%S) Argumente: "$@" >>/data/script.log
node index.js "$@"
