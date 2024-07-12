import { Produtos } from "./Produtos";

export class Livro implements Produtos{
    name: string;
    price: number

    constructor(myName:string, myPrice:number){
        this.name = myName
        this.price = myPrice

    }

    calcularValorTotal(taxa:number):number{
        return taxa = this.price + (this.price * 10 / 100); 
    }

}