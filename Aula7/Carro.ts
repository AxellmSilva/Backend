export class Carro {
    private cor: string
    private marca: string
    private potencia: number
    private velocidade: number


    constructor(myColor: string, myBrand: string, myPower: number, mySpeed: number){
        this.cor = myColor
        this.marca = myBrand
        this.potencia = myPower
        this.velocidade = mySpeed
    }

    corre ():void{
        console.log(`O carro da marca ${this.marca} e possui ${this.potencia} de força e está correndo numa velocidade de ${this.velocidade} km por hora`)
    }

    precoMarca ():void{
        console.log(`O carro da ${this.marca} é bem caro`)
    }

    estilo ():void{
        console.log(`O carro possui a cor ${this.cor}`)
    }

    getVelocidade ():number{
        return this.velocidade

    }
    setVelocidade (novaVelocidade:number):number | void{
        if(novaVelocidade > 0){
            this.velocidade = novaVelocidade
        }else{
            console.log("A velocidade não pode ser 0 ou negativa")
        }
    }

    getCor():string{
        return this.cor
    }

    setCor(novaCor:string):string{
           return this.cor = novaCor
        
    }
    
    getMarca():string{
        return this.marca
    }

    setMarca(novaMarca:string):string{
            return this.marca = novaMarca
    }

    getPotencia():number{
        return this.potencia
    }
    setPotencia(novaPotencia:number):number | void{
        if (novaPotencia > 0){
            this.potencia = novaPotencia
        }else{
            console.log("A potência não pode ser 0 ou negativa")
        }
    }
}