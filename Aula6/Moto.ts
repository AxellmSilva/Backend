export class Moto{
    cor:string
    marca:string
    potencia:number

    constructor(myColor:string, myBrand:string, myPower:number){
        this.cor = myColor
        this.marca = myBrand
        this.potencia = myPower
    }

    corre():void{
        console.log(`O carro da marca ${this.marca} e possui ${this.potencia} de força e está correndo`)
    }

    precoMarca():void{
        console.log(`O carro da ${this.marca} é bem caro`)
    }

    estilo():void{
        console.log(`O carro possui a cor ${this.cor}`)
    }
}