"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rd = require("readline-sync");
var nome = rd.question('Qual é o seu nome?: ');
var idade = rd.question('Qual é a sua idade?: ');
var temCarteira = rd.question('Você tem carteira? "s" ou "n": ').toUpperCase();
function podeDirigir(a, b, c) {
    if (idade >= 18 && temCarteira === "s") {
        console.log('Você está habilitado para dirigir');
    }
    else {
        console.log('Você não pode dirigir');
    }
}
podeDirigir(nome, idade, temCarteira);
