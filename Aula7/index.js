"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var meuCarro = new Carro_1.Carro("azul", 'ford', 100, 200);
var minhaMoto = new Moto_1.Moto('Verde', 'hyundai', 100, 230);
meuCarro.corre();
meuCarro.precoMarca();
meuCarro.estilo();
minhaMoto.corre();
minhaMoto.precoMarca();
minhaMoto.estilo();
meuCarro.setCor("amarelo");
console.log(meuCarro.getCor());
meuCarro.setVelocidade(-100);
console.log(meuCarro.getVelocidade());
minhaMoto.setVelocidade(-130);
console.log(minhaMoto.getVelocidade());
