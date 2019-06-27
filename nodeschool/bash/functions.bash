 #!/bin/bash bash


evenOutput (){
let a=$3

if [[ $(( $1 % 2 )) == 0 ]]; then
for (( i=0; i<=$3; i++)); do
echo -n ' '
done
echo $1
a=$3+1
fi

if [[ $(( $1 + 1 )) < $(( $2 )) ]]; then
evenOutput $(($1+1)) $(($2)) a
else return
fi
}

main (){
echo $FUNCNAME	
evenOutput "$1" "$2" 0;
}

main "$1" "$2"
