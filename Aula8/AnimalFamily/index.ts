import { Dog } from "./Dog";
import { Owl } from "./Owl";

const meuCachoro:Dog = new Dog('Nala', 15, "dalmata")
const minhaCoruja:Owl = new Owl('bird', 3.3,"white")

console.log(meuCachoro.name)
console.log(meuCachoro.weight)

meuCachoro.eat(10)
meuCachoro.bark()

console.log(minhaCoruja.name)
console.log(minhaCoruja.weight)

minhaCoruja.eat(6)
minhaCoruja.feather()