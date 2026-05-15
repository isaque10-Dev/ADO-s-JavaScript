import prompt from 'prompt-sync'
let prompt1 = prompt()

console.log("Mê dê um lado de seu octógono e eu lhe entregarei sua área")
let lado = Number(prompt1())
console.log()

let area = aaa(lado)

console.log("A área de seu octógono é " + aaa(lado) + "m²")

function aaa(lado){
    let resul = (lado * lado)
        let resul2 = resul * 2
            let resul3 = 1 + 1.41421356
    let resul4 = resul2 * resul3
    return resul4
}
