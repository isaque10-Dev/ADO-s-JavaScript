import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- VENDA DE AÇAÍ (TAMANHO ÚNICO) --\n');


console.log('Informe a quantidade de açaís comprados:');
let qtd = Number(ler());


let total = calcularTotalAcaiUnico(qtd);


console.log(`\nO valor total da venda é = R$ ${total}`);






function calcularTotalAcaiUnico(quantidade) {
    return quantidade * 13.50;
}