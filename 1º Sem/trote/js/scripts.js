function calcular(){
    let soma = 0
    let pontosKitSupl = 0
    let pontosdoacao = 0
    //declaração de variável sem tipo
    
    
    //recupera o valor da ação social digitado
    let acaosocial = Number(document.getElementById("acaosocial").value)
    soma += Number(acaosocial)
    //recupe o valor da homenagem digitado
    let homenagem = Number(document.getElementById("homenagem").value)
    soma += Number(homenagem)

    let leite = Number(document.getElementById("leite").value)
    soma += 2 * leite

    let suplemento = Number(document.getElementById("suplemento").value)
    //recupera a cor da equipe
    let equipe = document.getElementById("equipe").value
    let kit = Number(document.getElementById("kit").value)
    
    if (equipe == "laranja"){
        if (kit >= 97 && suplemento >= 49){
            pontosKitSupl = 5000 + ((kit - 97) * 30 + (suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            pontosKitSupl = 4000 + ((kit - 78) * 30 + (suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25){
            pontosKitSupl = 2500 + ((kit - 49) * 30 + (suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kit - 19) * 30 + (suplemento - 10) * 15)
        }
    } 
    
        else if (equipe == "preta"){
            if (kit >= 103 && suplemento >= 52){
                pontosKitSupl = 5000 + ((kit - 103) * 30 + (suplemento - 52) * 15)
            }
            else if (kit >= 82 && suplemento >= 42){
                pontosKitSupl = 4000 + ((kit - 82) * 30 + (suplemento - 42) * 15)
            }
            else if (kit >= 52 && suplemento >= 26){
                pontosKitSupl = 2500 + ((kit - 52) * 30 + (suplemento - 26) * 15)
            }
            else if (kit >= 21 && suplemento >= 10){
                pontosKitSupl = 1000 + ((kit - 21) * 30 + (suplemento - 10) * 15)
            }
        }

        else if (equipe == "roxa"){
            if (kit >= 102 && suplemento >= 51){
                pontosKitSupl = 5000 + ((kit - 102) * 30 + (suplemento - 51) * 15)
            }
            else if (kit >= 82 && suplemento >= 41){
                pontosKitSupl = 4000 + ((kit - 82) * 30 + (suplemento - 41) * 15)
            }
            else if (kit >= 51 && suplemento >= 26){
                pontosKitSupl = 2500 + ((kit - 51) * 30 + (suplemento - 26) * 15)
            }
            else if (kit >= 20 && suplemento >= 10){
                pontosKitSupl = 1000 + ((kit - 20) * 30 + (suplemento - 10) * 15)
            }
        }

        else if (equipe == "verde"){
            if (kit >= 88 && suplemento >= 44){
                pontosKitSupl = 5000 + ((kit - 88) * 30 + (suplemento - 44) * 15)
            }
            else if (kit >= 70 && suplemento >= 35){
                pontosKitSupl = 4000 + ((kit - 70) * 30 + (suplemento - 35) * 15)
            }
            else if (kit >= 44 && suplemento >= 22){
                pontosKitSupl = 2500 + ((kit - 44) * 30 + (suplemento - 22) * 15)
            }
            else if (kit >= 18 && suplemento >= 9){
                pontosKitSupl = 1000 + ((kit - 18) * 30 + (suplemento - 9) * 15)
            }
        }

        else {
            if (kit >= 93 && suplemento >= 47){
                pontosKitSupl = 5000 + ((kit - 93) * 30 + (suplemento - 47) * 15)
            }
            else if (kit >= 74 && suplemento >= 38){
                pontosKitSupl = 4000 + ((kit - 74) * 30 + (suplemento - 38) * 15)
            }
            else if (kit >= 47 && suplemento >= 24){
                pontosKitSupl = 2500 + ((kit - 47) * 30 + (suplemento - 24) * 15)
            }
            else if (kit >= 19 && suplemento >= 9){
                pontosKitSupl = 1000 + ((kit - 19) * 30 + (suplemento - 9) * 15)
            }
        }
    soma += pontosKitSupl

    let doacao = Number(document.getElementById("doacao").value)
    
    if (equipe == "laranja"){
        if (doacao >= 49){
            pontosdoacao = 2500 + (doacao - 49) * 20
        } else {
            pontosdoacao = doacao * 20
        }
    }

    else if (equipe == "preta"){
        if (doacao >= 52){
            pontosdoacao = 2500 + (doacao - 52) * 20
        } else {
            pontosdoacao = doacao * 20
        }
    }

    else if (equipe == "roxa"){
        if (doacao >= 51){
            pontosdoacao = 2500 + (doacao - 51) * 20
        } else {
            pontosdoacao = doacao * 20
        }
    }

    else if (equipe == "verde"){
        if (doacao >= 44){
            pontosdoacao = 2500 + (doacao - 44) * 20
        } else {
            pontosdoacao = doacao * 20
        }
    }

    else {
        if (doacao >= 47){
            pontosdoacao = 2500 + (doacao - 47) * 20
        } else {
            pontosdoacao = doacao * 20
        }
    }

    soma += pontosdoacao

    let arroz = document.getElementById("arroz").value
    soma += Number(arroz)

    let feijao = document.getElementById("feijao").value
    soma += Number(feijao)

    let macarrao = document.getElementById("macarrao").value
    soma += Number(macarrao / 2)

    let oleo = document.getElementById("oleo").value
    soma += Number(oleo)

    let audiovisual = document.getElementById("audiovisual").value
    soma += Number(audiovisual)

    let mascote = document.getElementById("mascote").value
    soma += Number(mascote)

    let animacao = document.getElementById("animacao").value
    soma += Number(animacao)

    //soma os valores
    //devolve o resultado para o HTML
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}