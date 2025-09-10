#!/bin/bash
f="file"
if [ -f "$f" ]; then
	if [ -s "$f" ]; then
	     echo "file exists and mot empty"
        else
	     echo "file exists and not empty"
         fi 
else 
	echo "file doesnot exist"
fi 

