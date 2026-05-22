import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log('Informe o tipo de triangulo')
console.log('Me fale os números')
console.log()

let n1 = Number(prompt1())
let n2 = Number(prompt1())
let n3 = Number(prompt1())

console.log('Seu triangulo é ' + eq(n1, n2, n3))

function eq (n1, n2, n3){
    let x = null
    if(n1 == n2 && n2 == n3 && n1 == n3){
        x = "Equilatero"
    }
    else if(n1 == n2 || n2==n3 || n3 ==n3){
        x = 'Isoceles'
    }
    else if(n1 == n2 || n3 == n1 || n1 ==n3){
        x = 'Escaleno'
    }
    return x
}