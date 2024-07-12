"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alface = void 0;
var Alface = /** @class */ (function () {
    function Alface(myTipo, myPreco, myNome, myPeso) {
        this.tipo = myTipo;
        this.preco = myPreco;
        this.nome = myNome;
        this.peso = myPeso;
    }
    Alface.prototype.compra = function () {
        console.log("O produto ".concat(this.nome, " est\u00E1 sendo comprado"));
    };
    Alface.prototype.lavar = function () {
        console.log("O produto ".concat(this.nome, " necessita ser lavado"));
    };
    return Alface;
}());
exports.Alface = Alface;
