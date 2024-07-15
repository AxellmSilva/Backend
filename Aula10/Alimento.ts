import { Produtos } from "./Produtos";

export class Alimento implements Produtos{
    price: number
    name: string

    constructor(myPrice:number, myName: string){
        this.name = myName
        this.price = myPrice
    }

    calcularValorTotal(taxa: number): number {
       return taxa = this.price + (this.price * 5 / 100) 
    }
}
