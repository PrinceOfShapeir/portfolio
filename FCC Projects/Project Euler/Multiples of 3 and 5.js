function multiplesOf3and5(number) {
let a, b, c = 0;
a = parseInt((number-1)/3);
b = parseInt((number-1)/5);

console.log(a);
console.log(b);

for(let i = 1; i<=a; i++){

  c+=(i*3);

}
console.log(c);
for(let i = 1; i<=b; i++){

if((i*5)%3!=0){


c+=(i*5);

}
}

console.log(c);

return c;
}


multiplesOf3and5(1000);
