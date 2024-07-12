import { Alimento } from "./Alimento";
import { Livro } from "./Livro";
import { Eletronico } from "./Eletronico";

import readlineSync from 'readline-sync'

const meuAlimento = new Alimento ()


const carrinho = [Alimento, Livro, Eletronico]

function comprarProduto():void{
   let adicionarCarrinho = readlineSync.question("Adicionar algo ao carrinho")
   adicionarCarrinho = carrinho.push
}

function verCarrinho():void{
    console.log("")
}