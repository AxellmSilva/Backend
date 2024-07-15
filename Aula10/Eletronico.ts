import { Produtos } from "./Produtos";

export class Eletronico implements Produtos{
    price: number;
    name: string;

    constructor(myPrice:number, myName:string){
        this.price = myPrice
        this.name = myName

    }

    calcularValorTotal(taxa:number): number {
        return taxa = this.price + (this.price * 7 / 100); 
        
    }

}