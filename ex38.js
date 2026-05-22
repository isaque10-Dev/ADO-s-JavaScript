import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- AVALIAÇÃO DO ALUNO --\n');

console.log('Informe a 1ª nota:');
let nota1 = Number(ler());

console.log('Informe a 2ª nota:');
let nota2 = Number(ler());

console.log('Informe a 3ª nota:');
let nota3 = Number(ler());

let media = calcularMediaTres(nota1, nota2, nota3);
let situacao = avaliarSituacaoAluno(media);

console.log(`\nMédia: ${media.toFixed(2)}`);
console.log(`Situação: ${situacao}`);






function calcularMediaTres(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function avaliarSituacaoAluno(mediaAluno) {
    let situacao = '';
    if (mediaAluno === 0) {
        situacao = 'Desistente';
    } else if (mediaAluno >= 8) {
        situacao = 'Aprovado com Sucesso';
    } else if (mediaAluno >= 6 && mediaAluno < 8) {
        situacao = 'Aprovado';
    } else if (mediaAluno >= 3 && mediaAluno < 6) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }
    return situacao;
}