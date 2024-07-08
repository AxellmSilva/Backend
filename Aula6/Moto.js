"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(myColor, myBrand, myPower) {
        this.cor = myColor;
        this.marca = myBrand;
        this.potencia = myPower;
    }
    Moto.prototype.corre = function () {
        console.log("O carro da marca ".concat(this.marca, " e possui ").concat(this.potencia, " de for\u00E7a e est\u00E1 correndo"));
    };
    Moto.prototype.precoMarca = function () {
        console.log("O carro da ".concat(this.marca, " \u00E9 bem caro"));
    };
    Moto.prototype.estilo = function () {
        console.log("O carro possui a cor ".concat(this.cor));
    };
    return Moto;
}());
exports.Moto = Moto;
