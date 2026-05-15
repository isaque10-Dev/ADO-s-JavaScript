import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- VENDA DE AÇAÍ (3 TAMANHOS) --\n');


console.log('Informe a quantidade de açaís pequenos:');
let qtdP = Number(ler());

console.log('Informe a quantidade de açaís médios:');
let qtdM = Number(ler());

console.log('Informe a quantidade de açaís grandes:');
let qtdG = Number(ler());


let total = calcularTotalAcaiTamanhos(qtdP, qtdM, qtdG);


console.log(`\nO valor total da venda é = R$ ${total}`);




function calcularTotalAcaiTamanhos(p, m, g) {
    return (p * 13.50) + (m * 15.00) + (g * 17.50);
}