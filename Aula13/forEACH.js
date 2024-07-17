/*let tolkienLivros = ['Senhor dos Aneis', "o Hobbit", "Contos inacabados"]

tolkienLivros.forEach(livro => {
    console.log(`Eu já li ${livro}`)
})*/
/*let tolkienLivros = ['Senhor dos Aneis', "o Hobbit", "Contos inacabados"]

tolkienLivros.forEach(function(livro) {
    console.log(`Eu já li ${livro}`)
})*/
var arr = ["carro", "moto", "bicicleta"];
arr.forEach(function (element, index, array) {
    console.log("Elemento ".concat(element, " no \u00EDndice ").concat(index));
    console.log('Array original: ', array);
});
