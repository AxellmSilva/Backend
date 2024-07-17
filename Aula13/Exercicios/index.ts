import { Pizza } from "./Pizza";
import { SaborPizza } from "./pizzaria";

const pizza1:Pizza = new Pizza(SaborPizza.Sabor1, 80, "grande")
const pizza2:Pizza = new Pizza(SaborPizza.Sabor2, 110, "Família")


console.log(pizza1.Descricao())
console.log(pizza2.Descricao())