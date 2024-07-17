"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(myFlavor, myPrice, mySize) {
        this.sabor = myFlavor;
        this.price = myPrice;
        this.size = mySize;
    }
    Pizza.prototype.Descricao = function () {
        return ("Pizza ".concat(this.sabor, ", Pre\u00E7o ").concat(this.price, " e Tamanho").concat(this.size));
    };
    return Pizza;
}());
exports.Pizza = Pizza;
