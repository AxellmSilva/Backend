"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var meuCarro = new Carro_1.Carro("azul", 'ford', 100);
var minhaMoto = new Moto_1.Moto('Verde', 'hyundai', 100);
meuCarro.corre();
meuCarro.precoMarca();
meuCarro.estilo();
minhaMoto.corre();
minhaMoto.precoMarca();
minhaMoto.estilo();
