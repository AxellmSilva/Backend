// criar classe coruja
// 3 atrivutos
// 3 métodos
// não esqueçer do constructor
// depois de criar a classe, instanciar dois objetos coruja e chamar os métodos
var Coruja = /** @class */ (function () {
    function Coruja(owlNome, owlPeso, owlCor) {
        this.nome = owlNome;
        this.peso = owlPeso;
        this.cor = owlCor;
    }
    Coruja.prototype.charriar = function () {
        console.log('hu hu');
    };
    Coruja.prototype.voar = function () {
        console.log('A coruja está voando');
    };
    Coruja.prototype.comer = function () {
        console.log('A coruja está comendo');
    };
    return Coruja;
}());
var myOwl = new Coruja('Noturno', 4, 'Branca');
var mySecondOwl = new Coruja('Diurno', 3.3, 'Marrom');
myOwl.charriar();
myOwl.voar();
