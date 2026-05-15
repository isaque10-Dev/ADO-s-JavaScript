import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- VERIFICAR REABASTECIMENTO --\n');


console.log('Informe a capacidade do tanque (em litros):');
let capacidade = Number(ler());

console.log('Informe a quantidade atual de combustível (em litros):');
let atual = Number(ler());


let reabastecer = verificarReabastecimento(capacidade, atual);


console.log(`\nO carro deve ser reabastecido? ${reabastecer}`);







function verificarReabastecimento(capTanque, qtdAtual) {
    return qtdAtual <= (capTanque / 4);
}