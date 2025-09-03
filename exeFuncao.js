/**
    Teste para ver se a palavra informada é uma palíndroma

    trim() = remove espaços indesejados antes e depois da string
    split() = divide a palavra, transformando string em um vetor
    reverse() = inverte as posições de um vetor, funciona apenas com vetores
    join() = junta os elementos do vetor em uma string 
 */

let palavra = prompt("Informe uma palavra: ").trim()
let aux = palavra.split("")

aux = aux.reverse()
aux = aux.join("")

if(palavra === aux){
    alert("Sim")
} else{
    alert("não")
}

/*  Forma enxuta
    
let palavra = prompt("Palavra: ")
let invertida = palavra.trim().split("").reverse().join("")

if(palavra.trim() === invertida){
    alert("Sim")
} else{
    alert("Não")
}
*/