"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(myName, myPrice) {
        this.name = myName;
        this.price = myPrice;
    }
    Livro.prototype.calcularValorTotal = function (taxa) {
        return taxa = this.price + (this.price * 10 / 100);
    };
    return Livro;
}());
exports.Livro = Livro;
