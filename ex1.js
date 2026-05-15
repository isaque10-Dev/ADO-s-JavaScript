import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log('Jogo da soma')
console.log('Fala o primeiro número')
let n1 = Number(prompt1())
console.log()

console.log('Fala o segundo número')
let n2 = Number(prompt1())


let res= soma(n1,n2);

console.log('A soma é ' + res)


function soma(n1, n2){
    let s = n1 + n2;
    return s;
}