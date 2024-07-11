import { Produtos } from "./Produtos";

export class Alface implements Produtos{
    tipo: string;
    preco: number;
    nome: string;
    peso: number;

    constructor(myTipo:string, myPreco:number, myNome:string, myPeso:number){
        this.tipo = myTipo
        this.preco = myPreco
        this.nome = myNome
        this.peso = myPeso
    }

    compra(): void {
        console.log(`O produto ${this.nome} está sendo comprado`)
    }

    lavar(): void {
        console.log(`O produto ${this.nome} necessita ser lavado`)
    }

}