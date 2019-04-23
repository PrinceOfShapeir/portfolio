/*
var args = process.argv.slice[2];
var list = Math.min(...args);
console.log(`The minimum of [${args}] is ${list}`);*/



var numbers = process.argv.slice(2);
var min = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${min}`);
