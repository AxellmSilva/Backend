export class Home{
    janela: number
    porta: number

    constructor(myWindow:number, myDoor:number){
        this.janela = myWindow
        this.porta = myDoor
    }

    protegeDaChuva():void{
        console.log("The home procted us from rain")
    }

}