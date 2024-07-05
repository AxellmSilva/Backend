import * as rd from 'readline-sync'
let nome:string = rd.question('Qual é o seu nome?: ')
let idade:number = rd.question('Qual é a sua idade?: ')
let temCarteira: string = rd.question('Você tem carteira? "s" ou "n": ').toUpperCase()


function podeDirigir (a:string, b:number, c:string):void{
    if (idade >= 18 && temCarteira === "s"){
        console.log('Você está habilitado para dirigir')
    }else{
        console.log('Você não pode dirigir')
    }
        

}

podeDirigir(nome, idade, temCarteira)
