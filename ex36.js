import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- COMPRA NA SORVETERIA --\n');


console.log('Informe o total de gramas de sorvete comprado:');
let gramas = Number(ler());

// Processamento
let resultado = '';
if (gramas <= 0) {
    resultado = 'Peso Inválido';
} else {
    let total = calcularSorvete(gramas);
    resultado = `Total a pagar: R$ ${total.toFixed(2)}`;
}


console.log(`\n${resultado}`);



function calcularSorvete(totalGramas) {
    let precoPor100g = 3.50;
    if (totalGramas >= 1000) {
        precoPor100g = 3.00;
    }
    let total = (totalGramas / 100) * precoPor100g;
    return total;
}