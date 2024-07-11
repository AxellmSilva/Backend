// Crie um interface chamada Produtos que tenha os atributos tipo, preco, nome, peso
// Crie pelo menos um método obrigatório nesta interface

//Crie 3 classes que utilizem esta interface. crie um método diferent para cada produto.

//instancie as classes no index.ts e chama estes métodos e atributos.

export interface Produtos{
    tipo:string
    preco:number
    nome:string
    peso:number
    compra():void
}