// Definindo um objeto representando os livros de ficção com seus respectivos autores
let ficcao ={
    "Fundação": "Isaac Asimov",
    "Duna": "Frank Herbert"
}

//Iterando sobre os livros de ficção e exibindo os autores
for(let livro in ficcao){
    console.log(`Autor do livro "${livro}": ${ficcao[livro]}`)
}
//${livro} pega o valor da esquerda. ${ficcao[livro]} pega o valor da direita.

//for in não é usado com arrays apenas com objetos