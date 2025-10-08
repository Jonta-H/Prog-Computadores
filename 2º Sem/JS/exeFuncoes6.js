function main() {
    let vetor = [], opcao, nome
    listaInicial(vetor)
    do {
        let media = mediaSalarial(vetor)
        opcao = Number(prompt("1. Cadastrar funcionário\n2. Listar funcionários\n3. Aumentar salário\n4. Buscar salário (nome)\n5. Atualizar cargo\n6. Remover funcionário\n7. Média salarial da empresa\n8. Promover funcionários\n9. Maior salário:\n10. Encerrar"))
        
        switch (opcao) {
            case 1:
                cadastrarNovo(vetor)
                break;
            case 2:
                listarFuncionarios(vetor)
                break;
            case 3:
                aumentarSalario(vetor)
                break;
            case 4: nome = prompt("Nome do funcionário:")
                buscarSalario(vetor, nome)
                break;
            case 5: nome = prompt("Nome do funcionário:")
                atualizarCargo(vetor, nome)
                break;
            case 6: nome = prompt("Nome do funcionário:")
                removerFuncionario(vetor, nome)
                break;
            case 7:
                console.log(`Média salarial: R$${media.toFixed(2)}`)
                break;
            case 8:
                promoverFuncionarios(vetor, media)
                break;
            case 9:
                maiorSalario(vetor)
                break;
            case 10:
                alert("Encerrando...")
                break;
            default: alert("Opção inválida!")
                break;
        }
    } while (opcao != 10)
}

function maiorSalario(lista){
    let maiorSalario = lista[0].salario, indice = 0
    for(let i = 0; i < lista.length; i++){
        if(lista[i].salario > maiorSalario){
            maiorSalario = lista[i].salario
            indice = i
        }
    }
    console.log(`Maior salário\nFuncionário: ${(lista[indice]).nome}\tSalário: R$${(lista[indice]).toFixed(2)}`)
}

function promoverFuncionarios(lista, media){
    for(let n of lista){
        if(n.salario < media){
            n.cargo = "Analista Júnior"
            n.salario*= 1.15
        }
    }
}

function mediaSalarial(lista) {
    let soma = 0
    for (let n of lista) {
        soma += n.salario
    }
    return soma / lista.length
}

function removerFuncionario(lista, nome) {
    for (let i = 0; i < lista.length; i++) {
        if ((lista[i].nome).toLowerCase() == nome.toLowerCase()) {
            lista.splice(i, 1)
            return
        }
    }

    console.log("Funcionário não encontrado.")
}

function atualizarCargo(lista, nome) {
    for (let n of lista) {
        if ((n.nome).toLowerCase() == nome.toLowerCase()) {
            n.cargo = prompt("Novo cargo:")
            return
        }
    }

    console.log("Funcionário não encontrado.")
}

function listaInicial(lista) {
    lista.push({ nome: "José Alfredo", cargo: "Gerente", salario: 500 })
    lista.push({ nome: "Maria Betânia", cargo: "RH", salario: 200 })
    lista.push({ nome: "Zeca Baleiro", cargo: "Assistente", salario: 50 })
}

function cadastrarNovo(lista) {
    lista.push({
        nome: prompt("Nome:"),
        cargo: prompt("Cargo:"),
        salario: Number(prompt("Salário:"))
    })
}

function listarFuncionarios(lista) {
    for (let n of lista) {
        console.log(`Nome: ${n.nome}\tCargo: ${n.cargo}\tSalário: R$${(n.salario).toFixed(2)}`)
    }
}

function aumentarSalario(lista) {
    for (let n of lista) {
        n.salario *= 1.1
    }
}

function buscarSalario(lista, nome) {
    for (let n of lista) {
        if ((n.nome).toLowerCase() == nome.toLowerCase()) {
            console.log(`Salário: R$${n.salario.toFixed(2)}`)
            return
        }
    }

    console.log("Funcionário não encontrado.")
}

main()