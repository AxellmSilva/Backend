// Definindo um objeto representando os livros de ficção com seus respectivos autores
var ficcao = {
    "Fundação": "Isaac Asimov",
    "Duna": "Frank Herbert"
};
//Iterando sobre os livros de ficção e exibindo os autores
for (var livro in ficcao) {
    console.log("Autor do livro \"".concat(livro, "\": ").concat(ficcao[livro]));
}
