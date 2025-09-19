var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

let i = 0
let cidade = 1
while (lines[i] != "0") {
    let qntTestes = parseInt(lines[i])
    let j = i
    let imoveis = []
    let somaMoradores = 0, somaConsumo = 0
    do {
        i++
        let valores = lines[i].split(" ")
        let imovel = {
            qntMoradores: parseInt(valores[0]),
            consumo: Math.floor((valores[1]) / qntMoradores)
        }
        somaMoradores += parseInt(valores[0]), somaConsumo += parseInt(valores[1])
        imoveis.push(imovel)
    } while (i <= qntTestes + j)
    let string = transformarString(imoveis)
    
    console.log(`Cidade# ${cidade}:\n${string}\nConsumo medio: ${(somaConsumo/somaMoradores).toFixed(2)} m3.`)
    cidade++
}

function transformarString(vetorObjeto){
    let string = []
    vetorObjeto.sort(function(a,b){return b.consumo - a.consumo})
    for(let i = 0; i < vetorObjeto.length; i++){
        string.push(vetorObjeto[i].qntMoradores + "-" + vetorObjeto[i].consumo)
    }

    let resultado = string.join(" ")
    return resultado
}

