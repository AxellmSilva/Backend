var rd = require('readline-sync')
let numero = Number(rd.question("Digite qualquer número para saber se ele é positivo our negativo: "))

if(numero >= 1){
console.log("Este número é positivo.")
}else if (numero <= 0) {
console.log("Este número é negativo")
}
