export class Person{
    protected children: number //este atributo está protegido, ou seja, só pode ser acessado DENTRO desta classe ou dentro das classes filhas

    constructor(children: number){
        this.children = children
    }
    
    protected howManyChildren():void{
        console.log(`This person has ${this.children} children.`)
    }
}