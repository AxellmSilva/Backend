export interface Produtos{
    price:number
    name:string
    calcularValorTotal(taxa:number):number
}