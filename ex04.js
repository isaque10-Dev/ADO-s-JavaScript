import prompt from 'prompt-sync'
let prompt1 = prompt();

console.log("Bem vindo ao jogo da metade")

let num = Number(prompt1())

let meio = metade(num)

console.log("A metade de " + num + " é " + meio)


function metade(num){
    let meio = num / 2
    return meio
}