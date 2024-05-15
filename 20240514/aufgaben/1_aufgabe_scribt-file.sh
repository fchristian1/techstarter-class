#!/bin/bash

# Author:Christian Fröchtenicht fc1(at)gmx.net
# License: MIT
# Version: 1.0.0
# CreateDate: 20240514 ISO
# EditDate: 20240514 ISO
# Name: 1_aufgabe
# Description: give me arguments and I print these arguments greater 10

argument_count_greater_0="[ $# -eq 0 ]"

if eval $argument_count_greater_0
then
    echo "No arguments given"
    exit 1
fi

for one_argument_from_argument_list in $@; do
    
    check_is_argument_a_number="[[ $one_argument_from_argument_list =~ ^[0-9]+$ ]]"
    check_is_argument_greater_10="[ $one_argument_from_argument_list -gt 10 ]"

    if eval $check_is_argument_a_number && eval $check_is_argument_greater_10
    then
        argument_greater_10=$one_argument_from_argument_list
        echo $argument_greater_10
    fi
done
