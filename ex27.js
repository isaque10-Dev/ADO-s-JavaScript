import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- VERIFICAR PESO IDEAL (IMC) --\n');


console.log('Informe o peso (kg):');
let peso = Number(ler());

console.log('Informe a altura (m):');
let altura = Number(ler());


let acimaDoPeso = verificarAcimaDoPeso(peso, altura);


console.log(`\nA pessoa está acima do peso ideal? ${acimaDoPeso}`);






function verificarAcimaDoPeso(p, a) {
    let imc = p / (a * a);
    return imc > 25;
}