let matrizPoluicao = [], matrizRegiao = [], matrizDiaSemana = [`Segunda`, `Terça`, `Quarta`, `Quinta`, `Sexta`]

// Recebe o nome da região e o índice de poluição para cada dia da semana
for(let i = 0; i < 5; i++){
    matrizPoluicao[i] = []
    matrizRegiao[i] = prompt(`Informe a ${i+1}ª região`)
    for(let j = 0; j < 5; j++){
        do{
            matrizPoluicao[i][j] = Number(prompt(`Índice de poluição (${matrizDiaSemana[j]})`))
        }while(matrizPoluicao[i][j] > 500 || matrizPoluicao[i][j] < 0)
    }
}

let diagPrincipal = [], diagSecundaria = [], mediaPorRegiao = [], posMaiorIndice = [0,0]
let somaDiagPri = 0, somaDiagSec = 0, indCritico = 0, maiorIndice = matrizPoluicao[0][0]

// Guarda os valores da diagonal principal e soma para fazer a média
for(let i = 0; i < matrizPoluicao.length; i++){
    diagPrincipal.push(matrizPoluicao[i][i])
    somaDiagPri+= diagPrincipal[i]
}

// Guarda os valores da diagonal secundária e soma para fazer a média
for(let i = 0; i < matrizPoluicao.length; i++){
    diagSecundaria.push(matrizPoluicao[(matrizPoluicao.length-1)-i][i])
    somaDiagSec+= diagSecundaria[i]
}

// Contabiliza qntd de índices superiores a 300
// Guarda o maior valor e sua posição na matriz
for(let i = 0; i < matrizPoluicao.length; i++){
    for(let j = 0; j < matrizPoluicao[i].length; j++){
        if(matrizPoluicao[i][j] > maiorIndice){
            maiorIndice = matrizPoluicao[i][j]
            posMaiorIndice = [i,j]
        }
        if(matrizPoluicao[i][j] > 300){
            indCritico++
        }
    }
}

// Soma os valores de cada região e guarda a média
for(let i = 0; i < matrizPoluicao.length; i++){
    let somaRegiao = 0
    for(let j = 0; j < matrizPoluicao[i].length; j++){
        somaRegiao+= matrizPoluicao[i][j]
    }
    mediaPorRegiao[i]= somaRegiao / matrizPoluicao.length
}
// Calcula a menor média
let menorMedia = mediaPorRegiao[0], regiaoMenorMedia = 0
for(let i = 0; i < mediaPorRegiao.length; i++){
    if(mediaPorRegiao[i] < menorMedia){
        menorMedia = mediaPorRegiao[i]
        regiaoMenorMedia = i
    }
}

console.log(`Valores da diag. principal: ${diagPrincipal}. Média: ${somaDiagPri/diagPrincipal.length}`)
console.log(`Valores da diag. secundária: ${diagSecundaria}. Média: ${somaDiagSec/diagSecundaria.length}`)
console.log(`Maior índice registrado foi ${maiorIndice} pela região ${matrizRegiao[posMaiorIndice[0]]} em uma ${matrizDiaSemana[posMaiorIndice[1]]}`)
console.log(`O índice foi superior a 300 (nível crítico) ${indCritico} vez(es)`)
console.log(`A região ${matrizRegiao[regiaoMenorMedia]} demonstrou a menor média de poluição (${menorMedia})\n\n\n`)

console.log(matrizPoluicao)