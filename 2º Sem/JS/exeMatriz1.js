let matriz = []

for(let i = 0; i < 3; i++){
    matriz[i] = []
    for(let j = 0; j < 3; j++){
        matriz[i][j] = parseInt(Math.random()*10)
    }
}

let soma = 0, pares = 0

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        soma+= matriz[i][j]
        if(matriz[i][j] % 2 === 0){
            pares++
        }
    }
}

console.log(`Soma de todos valores: ${soma}\n` +
             `Quantidade de pares: ${pares}\n` +
             `Valores na diagonal secundária: `)

for(let i = 0; i < matriz.length; i++){
    console.log(`${matriz[i][(matriz[i].length-1)-i]}`)
}