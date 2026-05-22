import prompt from 'prompt-sync'
let prompt1 = prompt();

console.log('-- INGRESSOS DE CINEMA --\n');


console.log('Informe o tipo do ingresso (Meia ou Inteira):');
let tipo = prompt1();

console.log('Informe a quantidade de ingressos:');
let qtd = Number(prompt1());

let total = calcularTotalCinema(tipo, qtd);

console.log(`\nO total a se pagar é = R$ ${total.toFixed(2)}`);



function calcularTotalCinema(tipoIngresso, quantidade) {
    let preco = 28.50;
    if (tipoIngresso.trim().toLowerCase() === 'meia') {
        preco = 14.25;
    }
    return preco * quantidade; }
