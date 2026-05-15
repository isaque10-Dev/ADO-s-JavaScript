import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log('Jogo do triplo')
console.log('Fala o numero')

let triplo = Number(prompt1())


let res = tri(triplo)

console.log('Seu resultado é ' + res)


function tri(triplo){
    let c = triplo * 3
    return c
}