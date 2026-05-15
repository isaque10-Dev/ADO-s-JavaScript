import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- VERIFICAR NÚMERO PAR --\n');


console.log('Informe um número:');
let num = Number(ler());


let par = verificarPar(num);


console.log(`\nO número é par? ${par}`);






function verificarPar(numero) {
    return numero % 2 === 0;
}