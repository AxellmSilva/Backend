"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alimento_1 = require("./Alimento");
var Livro_1 = require("./Livro");
var Eletronico_1 = require("./Eletronico");
var readlineSync = require('readline-sync');
var meuLivro = new Livro_1.Livro("Senhor dos Aneis", 34);
var meuAlimento = new Alimento_1.Alimento(22, "arroz");
var meuEletronico = new Eletronico_1.Eletronico(120, "DVD");
var continuar = true;
var estoque = [Livro_1.Livro, Alimento_1.Alimento, Eletronico_1.Eletronico];
var carrinho = [];
function comprarProduto() {
    var adicionarCarrinho = readlineSync.question("Adicionar algo ao carrinho(Eletronico, Alimento ou Livro) ");
    carrinho.push(adicionarCarrinho);
    if (carrinho === adicionarCarrinho) {
        meuLivro.name;
        meuLivro.price;
    }
}
function verCarrinho() {
    console.log(carrinho);
}
function pagar() {
}
function sair() {
    continuar = false;
}
while (continuar) {
    var pergunta = "";
    pergunta += "Escolha uma opção\n";
    pergunta += "1. Comprar produto\n";
    pergunta += "2. Ver carrinho\n";
    pergunta += "3. Pagar\n";
    pergunta += "0. sair\n";
    var resposta = Number(readlineSync.question(pergunta));
    switch (resposta) {
        case 1:
            comprarProduto();
            break;
        case 2:
            verCarrinho();
            break;
        case 3:
            pagar();
            break;
        case 0:
            sair();
            break;
    }
}
