import { Person } from "./Person";
class Father extends Person{
    falar():void{
        console.log("this is the father.")
        this.howManyChildren// pode acessar membros protected da classe pai
    }
}

const pai = new Person(4)
pai.howManyChildren()//não pode acessar fora da classe
