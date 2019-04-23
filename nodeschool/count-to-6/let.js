let name = process.argv.slice(2);
let nameEmail = {};
[,nameEmail.username,nameEmail.email] = name;
console.log(nameEmail);
