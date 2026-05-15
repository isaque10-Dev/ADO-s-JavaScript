import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log('Calcular o valor de sua compra')

console.log('Fale o valor de sua compra')
let v1 = Number(prompt1())
console.log()

console.log('Agora seu desconto ')
let des = Number(prompt1())
console.log()

console.log('Seu valor final é R$' + res(v1, des).toFixed(2))

function res(v1, des){
    let x = v1 - (v1 / 100) * des
    return x
}