#!/bin/bash bash
$1 || echo 'First parameter is false.'

$2 && $PWD

$3 && ls || echo 'Third parameter is false' 
