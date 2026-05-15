import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- CÁLCULO DE TEMPO DE LEITURA --\n');


console.log('Informe o nome do livro:');
let livro = ler();

console.log('Informe o total de páginas:');
let paginas = Number(ler());

console.log('Informe o tempo em segundos de leitura por página:');
let tempoPorPagina = Number(ler());

let horasDeLeitura = calcularTempoLeitura(paginas, tempoPorPagina);

console.log(`\nO livro '${livro}' será lido em aproximadamente ${horasDeLeitura} horas.`);






function calcularTempoLeitura(totalPaginas, tempoSegundoPorPagina) {
    let totalSegundos = totalPaginas * tempoSegundoPorPagina;
    return (totalSegundos / 3600).toFixed(2);
}