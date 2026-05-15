import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- CÁLCULO DE PARADAS NA VIAGEM --\n');


console.log('Informe a capacidade do tanque (em litros):');
let tanque = parseInt(ler());

console.log('Informe o consumo do veículo (km por litro):');
let consumo = parseInt(ler());

console.log('Informe a distância da viagem (km):');
let distancia = parseInt(ler());

let paradas = calcularParadasAbastecimento(tanque, consumo, distancia);


console.log(`\nSerão necessárias = ${paradas} paradas para abastecer`);






function calcularParadasAbastecimento(capTanque, consVeiculo, distViagem) {
    return parseInt(distViagem / (capTanque * consVeiculo)) + 1;
}