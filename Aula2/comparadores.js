// Igual ===
// Diferente !==
// Maior >
// Maior ou Igual >= 
// Menor <
// Menor ou Igual <=

/*const valor1 = 5
const valor2 = 10

console.log(valor1 === valor2) //false
console.log(valor1 !== valor2) //true
console.log(valor1 > valor2) //false
console.log(valor1 >= valor2) //false
console.log(valor1 < valor2) //true
console.log(valor1 <= valor2) //true*/

var rd = require("readline-sync")

const num1 = Number(rd.question("Digite um número: "))
const num2 = Number(rd.question("Digite um outro número: "))

const iguais = num1 === num2
console.log(`Os números são iguais? ${iguais}`)

const difirente = num1 !== num2
console.log(`Os números são difirentes? ${difirente}`)

const primeiroMaior = num1 > num2
console.log(`O primeiro número é maior que o segundo? ${primeiroMaior}`)

const primeiroMaioOuIgual = num1 >= num2
console.log(`O primeiro é maior ou igual ao segundo? ${primeiroMaioOuIgual}`)

const segundoMaior = num1 < num2
console.log(`O segundo é maior que o primeiro? ${segundoMaior}`)

const segundoMaiorOuIgual = num1 <= num2
console.log(`O segundo é maior ou igual ao primeiro ${segundoMaiorOuIgual}`)