const rd = require("readline-sync")
const n1 = Number(rd.question("Digite um número: "))
const n2 = Number(rd.question("Digite outro número: "))
const operacao = rd.question("Digite um operador, Ex: A, M, D, S: ").toUpperCase()

if(operacao === "S" ){
    console.log('A sua subtração deu: ', n1 - n2)
}else if(operacao === "A"){
    console.log('A sua soma deu: ', n1 + n2)

}else if(operacao === "M"){
    console.log("A sua multiplicação deu: ", n1 * n2)
}else if(operacao === "D"){
    console.log("A sua divisão deu: ", n1 / n2)
}else{
    console.log("opção inválida")
}