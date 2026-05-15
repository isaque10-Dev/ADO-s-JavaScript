import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- VENDA DE AÇAÍ COM DESCONTO --\n');


console.log('Informe a quantidade de açaís pequenos:');
let qtdP = Number(ler());

console.log('Informe a quantidade de açaís médios:');
let qtdM = Number(ler());

console.log('Informe a quantidade de açaís grandes:');
let qtdG = Number(ler());

console.log('Informe o valor do cupom de desconto (%):');
let desc = Number(ler());

let totalFinal = calcularTotalAcaiComDesconto(qtdP, qtdM, qtdG, desc);


console.log(`\nO valor total da venda com desconto é = R$ ${totalFinal}`);





function calcularTotalAcaiComDesconto(p, m, g, descontoPorcentagem) {
    let somaBruta = (p * 13.50) + (m * 15.00) + (g * 17.50);
    return somaBruta - (somaBruta * (descontoPorcentagem / 100));
}