import { Produtos } from "./Produtos";

export class Eletronico implements Produtos{
    price: number;
    name: string;
    calcularValorTotal(taxa:number): number {
        return taxa = this.price + (this.price * 7 / 100); 
        
    }

}