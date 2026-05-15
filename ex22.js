import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- VERIFICAR APROVAÇÃO --\n');


console.log('Informe a 1ª nota:');
let nota1 = Number(ler());

console.log('Informe a 2ª nota:');
let nota2 = Number(ler());

console.log('Informe a 3ª nota:');
let nota3 = Number(ler());


let passou = verificarAprovacao(nota1, nota2, nota3);


console.log(`\nO aluno passou? ${passou}`);





function verificarAprovacao(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    return media >= 6;
}