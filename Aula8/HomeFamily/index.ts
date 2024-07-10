import { Home } from "./Home";
import { House } from "./House";
import { Apartament } from "./Apartament";

const minhaCasa:House = new House(2, 2, 2)
const meuApartamento:Apartament = new Apartament(1, 1, 4, 1)

minhaCasa.protegeDaChuva()
minhaCasa.andares()
meuApartamento.lift()
meuApartamento.protegeDaChuva()
minhaCasa.andares()
