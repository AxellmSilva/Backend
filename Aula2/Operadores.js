const readlineSync = require("readline-sync")

const nota1 = Number(readlineSync.question("Digite a primeira nota: "))
const nota2 = Number(readlineSync.question("Digite a segunda nota: "))
const nota3 = Number(readlineSync.question("Digite a terceira nota: "))

const media = (nota1 + nota2 + nota3) / 3

console.log(`A média das notas são ${media}`)
