import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- PERGUNTA SOBRE FRIENDS --\n');


console.log('Qual é o personagem de Friends que trabalha com TI?');
let respostaUsuario = ler();


let correta = verificarRespostaCorreta(respostaUsuario);


console.log(`\nA resposta está correta? ${correta}`);







function verificarRespostaCorreta(resposta) {
    return resposta.trim().toLowerCase() === 'chandler' || resposta.trim().toLowerCase() === 'chandler bing';
}