import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log("Jogo do quadrado ")
console.log('Me fale seu numero')
let n1 = Number(prompt1())
console.log()


let res = qua(n1)

console.log(" A area do seu quadrado é " + res)


function qua (n1){
    let x = n1 * n1
    return x;
}