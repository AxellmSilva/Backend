export class Pizza {
    sabor:string
    price:number
    size:string


    constructor(myFlavor:String, myPrice:number, mySize:string){
        this.sabor = myFlavor
        this.price = myPrice
        this.size = mySize
    }

    Descricao():string{
        return (`Pizza ${this.sabor}, Preço ${this.price} e Tamanho ${this.size}`)
    }
}