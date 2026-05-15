import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log("Jogo do dobro")
console.log("Digite um número")

let a = Number(prompt1());


let dobr2 = dobro(a)


console.log("O dobro de " + a + " é " + dobr2)


function dobro(a){
    let dobr1 = a * 2
    return dobr1
}