import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- VERIFICAR ÁREAS DE RETÂNGULOS --\n');


console.log('Informe a base do 1º retângulo:');
let base1 = Number(ler());

console.log('Informe a altura do 1º retângulo:');
let altura1 = Number(ler());

console.log('Informe a base do 2º retângulo:');
let base2 = Number(ler());

console.log('Informe a altura do 2º retângulo:');
let altura2 = Number(ler());


let mesmaArea = verificarAreasIguais(base1, altura1, base2, altura2);


console.log(`\nOs retângulos possuem a mesma área? ${mesmaArea}`);





function verificarAreasIguais(b1, h1, b2, h2) {
    return (b1 * h1) === (b2 * h2);
}