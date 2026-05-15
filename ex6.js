import prompt from 'prompt-sync'
let prompt1 = prompt();

console.log("Me dê a área e a base de um retângulo e eu te darei sua área")
console.log("Primeiro me dê a base")
let base = Number(prompt1())
console.log()

console.log("Agora me dê a altura")
let altura = Number(prompt1())
console.log()

let resul = area(base, altura)

console.log("A área total de seu triângulo é " + resul + "m²")

function area(base, altura){
    let resul = base * altura
    return resul
}