let matriz = [], vendedor = [], diaSemana = [`Seg`, `Ter`, `Qua`, `Qui`, `Sex`, `Sab`, `Dom`]

for(let i = 0; i < 4; i++){
    matriz[i] = []
    for(let j = 0; j < 7; j++){
        matriz[i][j] = parseInt(Math.random()*100)
    }
    vendedor[i] = prompt(`Informe o nome do ${i+1}º Vendedor: `)
}

let vendasVendedor = []

for(let i = 0; i < matriz.length; i++){
    vendasVendedor[i] = 0
    for(let j = 0; j < matriz[i].length; j++){
        vendasVendedor[i]+= matriz[i][j]
    }
}

let totalDiaSemana = []

for(let i = 0; i < matriz[0].length; i++){
    totalDiaSemana[i]=0
    for(let j = 0; j < matriz.length; j++){
        totalDiaSemana[i]+= matriz[j][i]
    }
}

let maiorValor = matriz[0][0], pos, somaTotalVendas = 0

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        if(matriz[i][j] > maiorValor){
            maiorValor = matriz[i][j]
            pos = [i,j]
        }
        somaTotalVendas+= matriz[i][j]
    }
}

console.log(`Total de vendas de cada vendedor: `)
for(let i = 0; i < vendasVendedor.length; i++){
    console.log(`${vendedor[i]}: R$${vendasVendedor[i]}`)
}

console.log(`Total vendido por dia da semana: `)
for(let i = 0; i < totalDiaSemana.length; i++){
    console.log(`${diaSemana[i]}: R$${totalDiaSemana[i]}`)
}

console.log(`Maior venda : R$${maiorValor} [${pos}]`)
console.log(`Média de vendas por dia: R$${(somaTotalVendas/28).toFixed(2)}`)

console.log(matriz)