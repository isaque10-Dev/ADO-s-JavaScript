import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- CÁLCULO DE SALÁRIO LÍQUIDO --\n');


console.log('Informe o salário base (R$):');
let base = Number(ler());

console.log('Informe o bônus mensal (%):');
let bonus = Number(ler());

console.log('Informe o total de descontos (R$):');
let descontos = Number(ler());


let liquido = calcularSalarioLiquido(base, bonus, descontos);

console.log(`\nO salário líquido do funcionário é = R$ ${liquido}`);




function calcularSalarioLiquido(salarioBase, bonusPorcentagem, descontosReais) {
    return salarioBase + (salarioBase * (bonusPorcentagem / 100)) - descontosReais;
}