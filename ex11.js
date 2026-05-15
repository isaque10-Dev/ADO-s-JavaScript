import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log('Calcular o valor de sua compra')

console.log('Fale o valor de sua compra')
let v1 = Number(prompt1())
console.log()

console.log('Agora seu desconto em R$')
let des = Number(prompt1())
console.log()

console.log(' Seu valor é R$' + res(v1, des))

function res(v1, des){
    let x = v1 - des
    return x
}