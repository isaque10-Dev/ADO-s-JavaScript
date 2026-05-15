import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log('Vamos converter seus R$ em Dolares')

console.log('Me fale seus R$')
let real = Number(prompt1())
console.log()

console.log('Seu resultado é $' + con(real) )

function con(real){
    let x = real * 5.16
    return x
}