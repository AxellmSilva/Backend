//Estou criando um 'molde' para objetos do tipo Cachorro

class Cachorro {
    nome:string
    peso:number
    pelagem:string
    raca:string


    constructor(dogNome: string, dogPeso:number, dogPelagem:string){
        this.nome = dogNome
        this.peso = dogPeso
        this.pelagem = dogPelagem
        this.raca = 'Golden'
    }

    latir():void{
        console.log('Au au')
        //console.log(`{this.nome} está latindo`) // Nala está latindo
    }

    correr():void{
        console.log('o cachorro está correndo.')
        //console.log(`{this.nome} está correndo`) // Nala está correndo
    }

    comer():void{
        console.log('o cachorro está comendo.') // Nala está comendo
        //console.log(`{this.nome} está comendo`)
    }

}

//instanciando meus objetos
const meuCachorro:Cachorro = new Cachorro('Nala', 13,'Amarela')
const meuOutroCachorro: Cachorro = new Cachorro('Margot', 10, 'preta')


//Assim chamamos um atributo
console.log(meuCachorro.nome)//Nala

//Assim chamamos um método
meuCachorro.latir()//Au Au