import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- AVALIAÇÃO DE IMC --\n');

console.log('Informe o peso (kg):');
let peso = Number(ler());

console.log('Informe a altura (m):');
let altura = Number(ler());

let imc = calcularIMC(peso, altura);
let situacao = avaliarFaixaIMC(imc);

console.log(`\nIMC: ${imc.toFixed(2)}`);
console.log(`Situação: ${situacao}`);






function calcularIMC(p, a) {
    return p / (a * a);
}

function avaliarFaixaIMC(valorIMC) {
    let faixa = '';
    if (valorIMC >= 40) {
        faixa = 'Obesidade Grau III';
    } else if (valorIMC >= 35 && valorIMC < 40) {
        faixa = 'Obesidade Grau II';
    } else if (valorIMC >= 30 && valorIMC < 35) {
        faixa = 'Obesidade Grau I';
    } else if (valorIMC >= 25 && valorIMC < 30) {
        faixa = 'Sobrepeso';
    } else if (valorIMC >= 18.5 && valorIMC < 25) {
        faixa = 'Peso Normal';
    } else {
        faixa = 'Abaixo do Peso';
    }
    return faixa;
}