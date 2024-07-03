//Arrays

/*const listaDeCompras = ['Carne', 'Leite', 'Pão']
console.log(listaDeCompras[0])//Carne
console.log(listaDeCompras[1])//Leite
console.log(listaDeCompras[2])//Pão

listaDeCompras[1] = 'Creme de Leite'
console.log(listaDeCompras)*/

var rd = require('readline-sync')

const escolhaRaca = rd.question('Digite um número de 0 a 4: ')
let arrayRaca = ['beagle', 'pitbull', 'pintcher', 'vira-lata', 'poodle']

console.log(arrayRaca[escolhaRaca])
