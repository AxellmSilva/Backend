import { Produtos } from "./Produtos";

export class Alimento implements Produtos{
    price: number;
    name: string;

    calcularValorTotal(taxa: number): number {
       return taxa = this.price + (this.price * 5 / 100) 
    }
}
