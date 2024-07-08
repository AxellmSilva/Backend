import { Monstro } from "./monstro";
import { Guerreiro } from "./guerreiro";

let meuGuerreiro = new Guerreiro("Conan", "Bárbaro", 100);
let monstro = new Monstro("Dragão")


meuGuerreiro.atacarMonstro(monstro)
monstro.info()