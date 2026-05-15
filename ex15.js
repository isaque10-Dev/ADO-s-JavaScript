import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log('Fale o valor da sua compra')
let v1 = Number(prompt1())
console.log()

console.log('Me fale quantas vezes você quer parcelar ')
let par = Number(prompt1())
console.log()

console.log("Sua compra de R$" + v1 + " em 10x de R$" + res(v1,par) + " foi concluída" )


function res(v1, par){
    let x = v1/par
    return x
}