#!/bin/bash bash

case "$1" in
    (jpg|jpeg)
	echo 'It is jpeg.'
	;;
    (png)
	echo 'It is png.'
	;;
    (gif)
	echo 'it is gif.'
	;;
    (*)
	echo "$1 is not an image!"
	;;
    esac
