import { Carro } from "./Carro";
import { Moto } from "./Moto";

let meuCarro = new Carro("azul", 'ford', 100, 200)
let minhaMoto = new Moto('Verde', 'hyundai', 100, 230)

meuCarro.corre()
meuCarro.precoMarca()
meuCarro.estilo()

minhaMoto.corre()
minhaMoto.precoMarca()
minhaMoto.estilo()

meuCarro.setCor("amarelo")
console.log(meuCarro.getCor())

meuCarro.setVelocidade(150)
console.log(meuCarro.getVelocidade())


minhaMoto.setVelocidade(130)
console.log(minhaMoto.getVelocidade())