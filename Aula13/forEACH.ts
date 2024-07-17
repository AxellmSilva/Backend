/*let tolkienLivros = ['Senhor dos Aneis', "o Hobbit", "Contos inacabados"]

tolkienLivros.forEach(livro => {
    console.log(`Eu já li ${livro}`)
})*/


/*let tolkienLivros = ['Senhor dos Aneis', "o Hobbit", "Contos inacabados"]

tolkienLivros.forEach(function(livro) {
    console.log(`Eu já li ${livro}`)
})*/


const arr = ["carro", "moto", "bicicleta"]

arr.forEach((element, index, array) =>{
    console.log(`Elemento ${element} no índice ${index}`)
    console.log('Array original: ', array)
})

//Quando precisa retornar o indice ou o array original