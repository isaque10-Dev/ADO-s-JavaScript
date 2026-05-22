 import prompt from 'prompt-sync'
 let prompt1 = prompt()

 console.log(`Escreva o dia da semana com a data
    e eu te darei por extenso `)
    console.log()

console.log('Fale a data')
let dat = Number(prompt1())
console.log()

console.log('Seu dia é ' + dia(dat))

function dia(dat){
    let x = null
    if(dat == 0){
        x = "Domingo"
    }
    else if(dat == 2){
        x = "Segunda"
    }
    else if(dat == 3){
        x = "Terça"
    }
    else if(dat == 4){
        x = "Quarta"
    }
    else if(dat == 5){
        x = "Quinta"
    }
    else if(dat == 6){
        x = "Sexta"
    }
    else if(dat == 7){
        x = "Sabado"
    }
    else {
        x = "Dia invalido"
    }
    return x
    }