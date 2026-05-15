import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log("Vmaos calcular sua média ")
console.log()

console.log("me fale sua primeira nota ")
let n1 = Number(prompt1());
console.log();


console.log("me fale sua segunda nota ")
let n2 = Number(prompt1());
console.log();  


console.log("me fale sua terceira nota ")
let n3 = Number(prompt1());
console.log();


console.log("me fale sua quarta nota ")
let n4 = Number(prompt1());
console.log();


console.log("me fale sua quinta nota ")
let n5 = Number(prompt1());
console.log();

function media(n1, n2, n3, n4, n5){
    let x = (n1 + n2 + n3 + n4 + n5 )/ 5
    return x
}



console.log('Sua média é ' + media(n1, n2, n3, n4, n5).toFixed(1))