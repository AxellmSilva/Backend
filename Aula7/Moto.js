"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(myColor, myBrand, myPower, mySpeed) {
        this.cor = myColor;
        this.marca = myBrand;
        this.potencia = myPower;
        this.velocidade = mySpeed;
    }
    Moto.prototype.corre = function () {
        console.log("O carro da marca ".concat(this.marca, " e possui ").concat(this.potencia, " de for\u00E7a e est\u00E1 correndo numa velocidade de ").concat(this.velocidade, " km por hora"));
    };
    Moto.prototype.precoMarca = function () {
        console.log("O carro da ".concat(this.marca, " \u00E9 bem caro"));
    };
    Moto.prototype.estilo = function () {
        console.log("O carro possui a cor ".concat(this.cor));
    };
    Moto.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    Moto.prototype.setVelocidade = function (novaVelocidade) {
        if (this.velocidade > 0) {
            this.velocidade = novaVelocidade;
        }
        else {
            console.log("A velocidade não pode ser menor que 0 ou negativa.");
        }
    };
    Moto.prototype.getCor = function () {
        return this.cor;
    };
    Moto.prototype.setCor = function (novaCor) {
        return this.cor = novaCor;
    };
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.setMarca = function (novaMarca) {
        return this.marca = novaMarca;
    };
    Moto.prototype.getPotencia = function () {
        return this.potencia;
    };
    Moto.prototype.setPotencia = function (novaPotencia) {
        if (this.potencia > 0) {
            this.potencia = novaPotencia;
        }
        else {
            console.log("A potência não pode ser menor que 0 ou negativa");
        }
    };
    return Moto;
}());
exports.Moto = Moto;
