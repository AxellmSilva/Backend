const readlineSync = require("readline-sync")

const num1 = Number(readlineSync.question('Insira um número '))
const num2 = Number(readlineSync.question('Insira outro número '))

console.log(num1 + num2)

//npm install readline-sync
