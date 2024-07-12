"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sabao = void 0;
var Sabao = /** @class */ (function () {
    function Sabao(myType, myPrice, myName, myWeight) {
        this.tipo = myType;
        this.preco = myPrice;
        this.nome = myName;
        this.peso = myWeight;
    }
    Sabao.prototype.compra = function () {
        console.log("O produto ".concat(this.nome, " est\u00E1 sendo comprado."));
    };
    Sabao.prototype.limpeza = function () {
        console.log("O sab\u00E3o ".concat(this.nome, " faz 25 lavagens"));
    };
    return Sabao;
}());
exports.Sabao = Sabao;
