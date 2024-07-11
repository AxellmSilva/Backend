import { Car } from "./Car";
export class Ford implements Car{
    model: string;
    year: number;

    constructor(model:string, year:number){
        this.model = model
        this.year = year
    }
    
    startEngine(): void {
       console.log(`O carro modelo ${this.model} está ligando.`)
    }

    honk():void{
        console.log("biii biii")
    }
}