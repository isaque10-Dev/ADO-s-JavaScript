import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- MÊS DO ANO --\n');

console.log('Informe o número do mês (1 a 12):');
let numMes = Number(ler());


let mes = obterNomeDoMes(numMes);


console.log(`\n${mes}`);




function obterNomeDoMes(numero) {
    let nomeMes = '';
    
    if (numero === 1) {
        nomeMes = 'Janeiro';
    } else if (numero === 2) {
        nomeMes = 'Fevereiro';
    } else if (numero === 3) {
        nomeMes = 'Março';
    } else if (numero === 4) {
        nomeMes = 'Abril';
    } else if (numero === 5) {
        nomeMes = 'Maio';
    } else if (numero === 6) {
        nomeMes = 'Junho';
    } else if (numero === 7) {
        nomeMes = 'Julho';
    } else if (numero === 8) {
        nomeMes = 'Agosto';
    } else if (numero === 9) {
        nomeMes = 'Setembro';
    } else if (numero === 10) {
        nomeMes = 'Outubro';
    } else if (numero === 11) {
        nomeMes = 'Novembro';
    } else if (numero === 12) {
        nomeMes = 'Dezembro';
    } else {
        nomeMes = 'Mês inválido';
    }
    return nomeMes;
}