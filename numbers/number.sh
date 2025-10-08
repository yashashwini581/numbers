#!/bin/bash
echo "enter a number"
read number 
if (( $number % 2 == 0 )); then
	echo "$nymber is even"
else
	echo "$number is odd"
fi
