import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- TRANSFERÊNCIA DE CILINDRO --\n');


console.log('Informe o diâmetro do 1º cilindro:');
let d1 = Number(ler());

console.log('Informe a altura do 1º cilindro:');
let h1 = Number(ler());

console.log('Informe o diâmetro do 2º cilindro:');
let d2 = Number(ler());

console.log('Informe a altura do 2º cilindro:');
let h2 = Number(ler());

let possivel = verificarTransferenciaVolume(d1, h1, d2, h2);


console.log(`\nÉ possível transferir o volume do cilindro 1 para o cilindro 2? ${possivel}`);





function verificarTransferenciaVolume(diametro1, altura1, diametro2, altura2) {
    let raio1 = diametro1 / 2;
    let raio2 = diametro2 / 2;
    
    let volume1 = Math.PI * Math.pow(raio1, 2) * altura1;
    let volume2 = Math.PI * Math.pow(raio2, 2) * altura2;
    
    return volume1 <= volume2;
}