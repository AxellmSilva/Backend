import { Produtos } from "./Produtos";
export class Sabao implements Produtos{
    tipo: string;
    preco: number;
    nome: string;
    peso: number;

    constructor(myType:string, myPrice:number, myName:string, myWeight:number){
        this.tipo = myType
        this.preco = myPrice
        this.nome = myName
        this.peso = myWeight
    }

    compra(): void {
        console.log(`O produto ${this.nome} está sendo comprado.`);
    }

    limpeza(): void{
        console.log(`O sabão ${this.nome} faz 25 lavagens`)
    }
}