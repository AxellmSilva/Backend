import { Home } from "./Home";

export class House extends Home{
    floor:number
    constructor(myWindow:number, myDoor:number, myFloor:number){
        super(myWindow, myDoor)
        this.floor = myFloor
    }

    andares():void{
    console.log(`The home has ${this.floor} floor`)        
    }

}