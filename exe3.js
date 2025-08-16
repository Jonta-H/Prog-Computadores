let cadastro = [], somaDuracao = 0, somaOrcamento = 0, projetosAcima = []

for(let i = 0; i < 7; i++){
    let projeto = {
        nome: prompt(`Nome do ${i+1}º projeto`),
        empresa: prompt(`Empresa`).toLowerCase(),
        duracao: Number(prompt(`Duração (meses)`)),
        orcamento: Number(prompt(`Orçamento (R$)`))
    }

    cadastro.push(projeto)
}

let maiorOrcamento = cadastro[0], inovatech = 0

for(let i = 0; i < cadastro.length; i++){
    if(cadastro[i].duracao > 12 && cadastro[i].orcamento > 1000000){
        projetosAcima.push(cadastro[i])
    }
    if(cadastro[i].orcamento > maiorOrcamento.orcamento){
        maiorOrcamento = cadastro[i]
    }
    somaDuracao+= cadastro[i].duracao
    if(cadastro[i].empresa === `inovatech`){
        inovatech++
    }
    if(cadastro[i].duracao < 6){
        somaOrcamento+= cadastro[i].orcamento
    }
}

console.log(`Projetos com 12+ meses e orçamento superior a R$1.000.000,00`)
for(let i = 0; i < projetosAcima.length; i++){
    console.log(projetosAcima[i])
}
console.log(`Projeto com maior orçamento: ${maiorOrcamento.nome}`)
console.log(`Duração média dos projetos: ${Math.round(somaDuracao/7, 1)} meses`)
console.log(`Quantidade de projetos realizados pela InovaTech: ${inovatech}`)
console.log(`Total gasto em projetos com menos de 6 meses de duração: R$${somaOrcamento}`)