let notas = []

for(let i = 0; i < 10; i++){
    notas[i] = Math.floor(Math.random() *10)
}

let soma = 0; aprovados = 0
let pares = []
console.log("Notas: ")
notas.forEach(function (element, posicao) {
    console.log(element)
    if(element >= 7){aprovados++}
    soma+=element
    if (posicao % 2 == 0){pares.push(element)}
})

console.log(notas)
console.log(`Soma das notas: ${soma}`)
console.log(`Média: ${soma/10}`)
console.log(`Alunos aprovados: ${aprovados}`)
console.log(`Posições pares: ${pares}`)
