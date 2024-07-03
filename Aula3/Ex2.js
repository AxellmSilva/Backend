const rd = require("readline-sync")
const senha = 1234
const login = Number(rd.question("Digite a sua senha para efetuar o login: "))

if (senha === login){
    console.log("Login efetuado.")

}else{
    console.log("Acesso negado! Tente novamente")
}