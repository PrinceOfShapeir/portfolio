#!/bin/bash bash
array=(I am)
array2=(${*:2:2} and ${*:4:1})
echo ${array[*]} ${array2[*]}

