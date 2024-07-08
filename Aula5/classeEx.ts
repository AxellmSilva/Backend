// criar classe coruja
// 3 atrivutos
// 3 métodos
// não esqueçer do constructor
// depois de criar a classe, instanciar dois objetos coruja e chamar os métodos

class Gato{
    nome:string
    peso:number
    cor:string

    constructor(owlNome: string, owlPeso: number, owlCor: string){
        this.nome = owlNome
        this.peso = owlPeso
        this.cor = owlCor

    }

    chirriar():void{
        console.log('hu hu')
    }

    voar():void{
        console.log('A coruja está voando')
    }

    comer():void{
        console.log('A coruja está comendo')
    }
}

const myCat: Gato = new Gato('Noturno', 4, 'Branca')
const mySecondCat: Gato = new Gato('Diurno', 3.3, 'Marrom')

myOwl.comer()
myOwl.voar()