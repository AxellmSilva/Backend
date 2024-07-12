"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leite = void 0;
var Leite = /** @class */ (function () {
    function Leite(myType, myPrice, myName, myWeight) {
        this.tipo = myType;
        this.preco = myPrice;
        this.nome = myName;
        this.peso = myWeight;
    }
    Leite.prototype.compra = function () {
        console.log("O produto ".concat(this.nome, " est\u00E1 sendo comprado"));
    };
    Leite.prototype.embalagem = function () {
        console.log("O produto ".concat(this.nome, " est\u00E1 embalado em caixa"));
    };
    return Leite;
}());
exports.Leite = Leite;
