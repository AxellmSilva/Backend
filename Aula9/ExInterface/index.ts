import { Sabao } from "./Sabao";
import { Alface } from "./Alface"
import { Leite } from "./Leite"

const meuSabao:Sabao = new Sabao("Higiêne", 4.59, "Tyxian", 400)
const meuAlface:Alface = new Alface("legume", 3.99, "hortifruit", 200)
const meuLeite:Leite = new Leite("Bebida", 4.99, "Láctea", 2)

meuSabao.compra()
meuAlface.compra()
meuLeite.compra()
console.log(`É do tipo ${meuSabao.tipo}`)
console.log(`É do tipo ${meuAlface.tipo}`)
console.log(`É do tipo ${meuLeite.tipo}`)

meuAlface.lavar()
meuSabao.limpeza()
meuLeite.embalagem()
