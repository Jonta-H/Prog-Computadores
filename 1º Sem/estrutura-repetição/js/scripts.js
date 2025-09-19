function exe0(){
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt('Informe a nota ${conta}'));
        soma = soma + nota
        conta++ // conta = conta + 1
    }
    let media = soma / 6
    alert(media)
}

function pesquisaSatisfacao(){
    let conta = 1 // numero de participantes
    let nota // será informado pelo usuário
    let soma = 0 // soma as notas para a média
    let satisfeitos = 0 // inicialmente, nenhum satisfeito 
    let insatisfeito = 0 // inicialmente, nenhum insatisfeito
    while(conta <= 10){
        nota = Number(prompt(`Informe a nota (0 a 10) do participante ${conta}`))
        if (nota >= 8 && nota <= 10){
            satisfeitos++ // satisfeitos = satisfeitos + 1
        } else if (nota >= 0 && nota < 5){
            insatisfeito++ // insatisfeitos = insatisfeitos + 1
        } else if (nota < 0 || nota > 10){ // || é OU
            alert(`Nota inválida!`)
            continue // volta para o início do while
        }
        soma += nota // soma as notas informadas
        conta++ // conta = conta + 1
    }
    let media = soma / 10 // calcula a média das notas
    alert(`Satisfeitos: ${satisfeitos}\nInsatisfeitos: ${insatisfeito}\nMédia: ${media.toFixed(1)}`)
}

function exercicio1(){
    let valores = 1
    let valor1
    let valor2
    let valor3
    let valor4
    let grupo1 = 0
    let grupo2 = 0
    let grupo3 = 0
    let grupo4 = 0
    let grupo5 = 0
    let grupo = 1

    while(valores <= 5){
        valor1 = Number(prompt(`Informe um número para o grupo ${grupo}`))
        valor2 = Number(prompt(`Informe um número para o grupo ${grupo}`))
        valor3 = Number(prompt(`Informe um número para o grupo ${grupo}`))
        valor4 = Number(prompt(`Informe um número para o grupo ${grupo}`))
        if (grupo1 == 0){
            grupo1 = [valor1, valor2, valor3, valor4]
        } else if (grupo2 == 0){
            grupo2 = [valor1, valor2, valor3, valor4]
        } else if (grupo3 == 0){
            grupo3 = [valor1, valor2, valor3, valor4]
        } else if (grupo4 == 0){
            grupo4 = [valor1, valor2, valor3, valor4]
        } else{
            grupo5 = [valor1, valor2, valor3, valor4]
        }
        grupo++
        valores++      
    }
    alert(`Grupo 1: ${grupo1}\nGrupo 2: ${grupo2}\nGrupo 3: ${grupo3}\nGrupo 4: ${grupo4}\nGrupo 5: ${grupo5}`)
    grupo1.sort(function(a,b){
        return a - b
    })
    grupo2.sort(function(a,b){
        return a - b
    })
    grupo3.sort(function(a,b){
        return a - b
    })
    grupo4.sort(function(a,b){
        return a - b
    })
    grupo5.sort(function(a,b){
        return a - b
    })
    alert(`Ordem crescente:\nGrupo 1: ${grupo1}\nGrupo 2: ${grupo2}\nGrupo 3: ${grupo3}\nGrupo 4: ${grupo4}\nGrupo 5: ${grupo5}`)
    grupo1.sort(function(a,b){
        return b - a
    })
    grupo2.sort(function(a,b){
        return b - a
    })
    grupo3.sort(function(a,b){
        return b - a
    })
    grupo4.sort(function(a,b){
        return b - a
    })
    grupo5.sort(function(a,b){
        return b - a
    })
    alert(`Ordem decrescente:\nGrupo 1: ${grupo1}\nGrupo 2: ${grupo2}\nGrupo 3: ${grupo3}\nGrupo 4: ${grupo4}\nGrupo 5: ${grupo5}`)
}