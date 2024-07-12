import { MetodosDePagamento } from "./MetodosDePagamento";

export class CartaoDeCredito implements MetodosDePagamento{
    valor: number
    
    constructor(myValor:number){
        this.valor = myValor
    }

    pay(): number {
        return this.valor
    }
}