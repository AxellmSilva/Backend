"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(myColor, myBrand, myPower) {
        this.cor = myColor;
        this.marca = myBrand;
        this.potencia = myPower;
    }
    Carro.prototype.corre = function () {
        console.log("O carro da marca ".concat(this.marca, " e possui ").concat(this.potencia, " de for\u00E7a e est\u00E1 correndo"));
    };
    Carro.prototype.precoMarca = function () {
        console.log("O carro da ".concat(this.marca, " \u00E9 bem caro"));
    };
    Carro.prototype.estilo = function () {
        console.log("O carro possui a cor ".concat(this.cor));
    };
    return Carro;
}());
exports.Carro = Carro;
