"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(myColor, myBrand, myPower, mySpeed) {
        this.cor = myColor;
        this.marca = myBrand;
        this.potencia = myPower;
        this.velocidade = mySpeed;
    }
    Carro.prototype.corre = function () {
        console.log("O carro da marca ".concat(this.marca, " e possui ").concat(this.potencia, " de for\u00E7a e est\u00E1 correndo numa velocidade de ").concat(this.velocidade, " km por hora"));
    };
    Carro.prototype.precoMarca = function () {
        console.log("O carro da ".concat(this.marca, " \u00E9 bem caro"));
    };
    Carro.prototype.estilo = function () {
        console.log("O carro possui a cor ".concat(this.cor));
    };
    Carro.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    Carro.prototype.setVelocidade = function (novaVelocidade) {
        if (this.velocidade > 0) {
            this.velocidade = novaVelocidade;
        }
        else {
            console.log("A velocidade não pode ser 0 ou negativa");
        }
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (novaCor) {
        return this.cor = novaCor;
    };
    Carro.prototype.getMarca = function () {
        return this.marca;
    };
    Carro.prototype.setMarca = function (novaMarca) {
        return this.marca = novaMarca;
    };
    Carro.prototype.getPotencia = function () {
        return this.potencia;
    };
    Carro.prototype.setPotencia = function (novaPotencia) {
        if (this.potencia > 0) {
            this.potencia = novaPotencia;
        }
        else {
            console.log("A potência não pode set 0 ou negativa");
        }
    };
    return Carro;
}());
exports.Carro = Carro;
