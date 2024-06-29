#!/bin/bash
q=25 #quantity
c=0
n="$(ls fc1_[0-9]* -t 2> /dev/null | wc -l)"
echo $n



username="$(who | cut -d ' ' -f1)"
echo $username

while [ $c -lt "$q" ]
do
  number=$((c + n))
  name=$username"_"$number
  #echo $name
  touch $name
  c=$((c +1))  
done
