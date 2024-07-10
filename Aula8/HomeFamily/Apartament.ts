import { House } from "./House"


export class Apartament extends House{
    elevator:number
    constructor(myWindow:number, myDoor:number, myFloor:number, myElevator:number){
        super(myWindow, myDoor, myFloor)
        this.elevator = myElevator
    }

    lift():void{
        console.log("The apartament is so high that needs use an elevator")
    }
}