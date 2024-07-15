import { Alimento } from "./Alimento";
import { Livro } from "./Livro";
import { Eletronico } from "./Eletronico";

var readlineSync = require('readline-sync')

const meuLivro = new Livro("Senhor dos Aneis", 34)
const meuAlimento = new Alimento (22, "arroz")
const meuEletronico = new Eletronico(120, "DVD")


let continuar = true

let estoque = [Livro, Alimento, Eletronico]
let carrinho = []

function comprarProduto():void{
   let adicionarCarrinho = readlineSync.question("Adicionar algo ao carrinho(Eletronico, Alimento ou Livro) ")
    carrinho.push(adicionarCarrinho)
  
}

function verCarrinho():void{
    
    console.log(carrinho)
    
}

function pagar(){

}

function sair():void{
    continuar = false
}




while(continuar){
    let pergunta = ""
        pergunta += "Escolha uma opção\n"
        pergunta += "1. Comprar produto\n"
        pergunta += "2. Ver carrinho\n"
        pergunta += "3. Pagar\n"
        pergunta += "0. sair\n"

    let resposta = Number(readlineSync.question(pergunta))


    switch (resposta){
        case 1:
            comprarProduto()
            break
        
        case 2:
            verCarrinho()
            break

        case 3:
            pagar()
            break

        case 0:
            sair()
            break
    }

}