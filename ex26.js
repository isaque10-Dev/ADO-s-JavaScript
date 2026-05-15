import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- VERIFICAR SEMÁFORO DE PEDESTRE --\n');


console.log('Informe a cor atual do semáforo de pedestres:');
let cor = ler();


let podeAtravessar = verificarTravessia(cor);


console.log(`\nO pedestre pode atravessar? ${podeAtravessar}`);





function verificarTravessia(corSemaforo) {
    return corSemaforo.trim().toLowerCase() === 'verde';
}