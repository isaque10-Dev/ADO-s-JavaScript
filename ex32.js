import prompt from 'prompt-sync'
let prompt1 =prompt()

console.log("!!!FARÓL!!!");
console.log()

console.log("Me fale a cor que está o farol nesse momento")
let cor = prompt1()
console.log()



console.log('Se o farol está ' + cor + " então " + sema(cor))





function sema(cor){
  let x = null
    if(cor == 'vermelho'){
       x ="espere"
        }
        else if(cor == 'verde'){
          x= "atravesse"
        }   
        else if(cor == "amarelo"){
            x= "tome cuidado!!"
        }
        else{
        x = "farol inoperante"
        }

        return x
}


