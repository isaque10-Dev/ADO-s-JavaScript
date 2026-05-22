import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- AVALIAÇÃO DE TEMPERATURA --\n');


console.log('Informe a temperatura (°C):');
let temperatura = Number(ler());


let classificacao = avaliarTemperatura(temperatura);


console.log(`\nSituação: ${classificacao}`);



function avaliarTemperatura(temp) {
    let classificacao = '';
    if (temp >= 41) {
        classificacao = 'Hipertermia';
    } else if (temp >= 39.6 && temp < 41) {
        classificacao = 'Febre Alta';
    } else if (temp >= 37.6 && temp < 39.6) {
        classificacao = 'Febre';
    } else if (temp >= 36 && temp < 37.6) {
        classificacao = 'Normal';
    } else {
        classificacao = 'Hipotermia';
    }
    return classificacao;
}