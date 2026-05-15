import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- VERIFICAR FEBRE --\n');


console.log('Informe a temperatura:');
let temperatura = Number(ler());


let febre = verificarFebre(temperatura);


console.log(`\nA pessoa está com febre? ${febre}`);






function verificarFebre(temp) {
    return temp >= 37.3;
}