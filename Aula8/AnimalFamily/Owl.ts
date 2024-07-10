import { Animal } from "../Animal";

export class Owl extends Animal{
    featherColor:string

    constructor(myName:string, myWeight:number, myFeather:string){
        super(myName, myWeight)
        this.featherColor = myFeather
    }

    feather():void{
        console.log(`The owl has beatiful ${this.featherColor} feather.`)
    }
}