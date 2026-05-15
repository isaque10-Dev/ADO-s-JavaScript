import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log('Jogo do triangulo')
console.log('me fale o primeiro lado')
let l1 = Number(prompt1())

console.log('Me fale o segundo lado')
let l2 = Number(prompt1())
console.log()


let tri = tria(l1, l2)

console.log('A base do triangulo é ' + tri)


function tria(l1, l2){
    let x = l1 * l2 / 2
    return x;
}