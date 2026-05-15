import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log('Vamos converter seus KG em gramas')

console.log('Me fale os KG')
let k = Number(prompt1())
console.log()

console.log('Seu resultado é ' + gr(k) + 'G')

function gr(k){
    let x = k * 1000
    return x
}