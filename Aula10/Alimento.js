"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimento = void 0;
var Alimento = /** @class */ (function () {
    function Alimento(myPrice, myName) {
        this.name = myName;
        this.price = myPrice;
    }
    Alimento.prototype.calcularValorTotal = function (taxa) {
        return taxa = this.price + (this.price * 5 / 100);
    };
    return Alimento;
}());
exports.Alimento = Alimento;
