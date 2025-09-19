let cadastro = [], somaSalarios = 0, gerentes = 0, funcionariosAcima = []

for(let i = 0; i < 6; i++){
    let nome = prompt(`Nome do ${i+1}º funcionário`)
    let cargo = prompt(`Cargo`).toLowerCase()
    let salario = Number(prompt(`Salário (R$)`))
    let tempoServico = Number(prompt(`Tempo de serviço (anos)`))

    let funcionario = {
        nome: nome,
        cargo: cargo,
        salario: salario,
        tempoServico: tempoServico
    }

    cadastro.push(funcionario)
}

let maiorSalario = cadastro[0]

for(let i = 0; i < 6; i++){
    if(cadastro[i].salario > maiorSalario.salario){
        maiorSalario = cadastro[i]
    }

    somaSalarios+= cadastro[i].salario

    if(cadastro[i].cargo == "gerente"){
        gerentes++
    }

    if(cadastro[i].salario > 5000 && cadastro[i].tempoServico > 5){
        funcionariosAcima.push(cadastro[i])
    }
}

console.log(`Funcionários com salários 5000+ e 5+ anos mais:`)
for(let i = 0; i < funcionariosAcima.length; i++){
    console.log(funcionariosAcima[i])
}

console.log(`Funcionário com maior salário: ${maiorSalario.nome} (R$${maiorSalario.salario})`)
console.log(`Média salarial: ${somaSalarios/6}`)
console.log(`Quantidade de gerentes: ${gerentes}`)