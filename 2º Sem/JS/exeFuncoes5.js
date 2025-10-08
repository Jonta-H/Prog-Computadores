function main() {
    let vetor = []
    cadastroInicial(vetor)
    let opcao
    do {
        opcao = Number(prompt("1. Cria aluno\n2. Lista nomes\n3. Atualiza idade\n4. Remover aluno\n5. Sair"))
        switch (opcao) {
            case 1:
                cadastroNovo(vetor)
                break;
            case 2:
                listarNomes(vetor)
                break;
            case 3:
                aumentarIdade(vetor)
                break;
            case 4: let nomeRemover = prompt("Nome do aluno: ")
                removerAluno(vetor, nomeRemover)
                break;
            case 5:
                alert("Encerrando...")
                break;
            default:
                alert("Opção inválida!")
                break;
        }
    } while (opcao != 5)

}

function removerAluno(alunos, nome) {
    for (let i = 0; i < alunos.length; i++) {
        if ((alunos[i].nome).toLowerCase() == nome.toLowerCase()) {
            alunos.splice(i, 1)
            return
        }
    }

    alert("Aluno não encontrado")
}

function cadastroNovo(alunos) {
    alunos.push({
        nome: prompt("Nome do aluno: "),
        idade: Number(prompt("Idade: ")),
        curso: prompt("Curso: ")
    })
}

function cadastroInicial(alunos) {
    alunos.push({ nome: "Ana", idade: 20, curso: "Sistemas de Informação" })
    alunos.push({ nome: "Carlos", idade: 22, curso: "Ciência da Computação" })
    alunos.push({ nome: "Beatriz", idade: 19, curso: "Engenharia de Software" })
}

function aumentarIdade(alunos) {
    for (let aluno of alunos) {
        aluno.idade += 1
    }
}

function listarNomes(alunos) {
    for (let aluno of alunos) {
        console.log(`Nome: ${aluno.nome}\tIdade: ${aluno.idade}\tCurso: ${aluno.curso}`)
    }
}

main()