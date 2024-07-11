
//Criei a interface Car que define as regras para qualquer classe que implemente ela.
export interface Car {
    model: string
    year: number
    startEngine():void //Não se coloca lógica num método em interface
}