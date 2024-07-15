"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronico = void 0;
var Eletronico = /** @class */ (function () {
    function Eletronico(myPrice, myName) {
        this.price = myPrice;
        this.name = myName;
    }
    Eletronico.prototype.calcularValorTotal = function (taxa) {
        return taxa = this.price + (this.price * 7 / 100);
    };
    return Eletronico;
}());
exports.Eletronico = Eletronico;
