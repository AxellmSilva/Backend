import { Carro } from "./Carro";
import { Moto } from "./Moto";

let meuCarro = new Carro("azul", 'ford', 100)
let minhaMoto = new Moto('Verde', 'hyundai', 100)

meuCarro.corre()
meuCarro.precoMarca()
meuCarro.estilo()

minhaMoto.corre()
minhaMoto.precoMarca()
minhaMoto.estilo()
