import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log('Seus Ganhos e Gastos')
console.log('Me fale seus ganhos')
let gan = Number(prompt1())
console.log()

console.log("Me fale seus gastos")
let gas = Number(prompt1())
console.log()

console.log( res(gan, gas))

function res(gan, gas){
    let x = null
    if(gan >= gas){
x = "Você está dentro do orçamento"
    }
    else if(gan < gas){
x = "Você está fora do orçamento, não gaste mais"
    }
    return x
}