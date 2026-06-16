import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA')

let vetor = []

for( let vini = 0; vini <5; vini++){
    console.log("Informe o nome")
    let nomes = ler()

    vetor.push(nomes)
}

console.log('você digitou os nomes: ')

for(let caixa of vetor){
    console.log("vini")
}
