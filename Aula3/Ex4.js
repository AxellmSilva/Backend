const rd = require("readline-sync")
const n1 = Number(rd.question("Digite um número: "))
const n2 = Number(rd.question("Digite um outro número: "))
const n3 = Number(rd.question("Digite mais outro número: "))

if (n1 > n2 && n1 > n3){
    console.log(`O número ${n1} é o maior`)
}else if(n2 > n1 && n2 > n3){
    console.log(`O número ${n2} é o maior`)
}else if(n3 > 1 && n3 > n2){
    console.log(`O número ${n3} é o maior`)
}else{
    console.log('Os valores são iguais ou incorretos')
}