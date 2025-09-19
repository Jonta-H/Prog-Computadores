function exe1(){
    let nums = [], impares = [], pares = []
    for(let i = 0; i < 6; i++){
        nums[i] = Number(prompt(`Informe o ${i+1}º numero:`))
    }

    for(let i = 0; i < 6; i++){
        if(nums[i] % 2 == 0){
            pares.push(nums[i])
        } else{
            impares.push(nums[i])
        }
    }

    console.log(`Numeros pares: ${pares}\n`+
                `Quantidade de pares: ${pares.length}\n`+
                `Numeros impares: ${impares}\n`+
                `Quantidade de impares: ${impares.length}`)
}

function exe2(){
    let nums = []

    for(let i = 0; i < 10; i++){
        nums[i] = Number(prompt(`Informe um numero`))
    }

    for(let i = 0; i < 10; i++){
        if(i % 2 == 0){
            nums[i]+= 10
        } else{
            nums[i]*= 5
        }
    }

    console.log(nums)
    
}

function exe3(){
    let opiniao = [], gostouMT = 0, gostou = 0, naoGostou = 0
    
    for(let i = 0; i < 10; i++){
        do{
            opiniao[i] = Number(prompt(`Pesquisa de opinião ${i+1}\n1 - Gostei muito\n2 - Gostei\n3 - Não gostei`))
        } while(opiniao[i] != 1 && opiniao[i] != 2 && opiniao[i] != 3)
        if(opiniao[i] == 1){
            gostouMT++
        } else if(opiniao[i] == 2){
            gostou++
        } else{
            naoGostou++
        }
    }

    console.log(`${gostou} pessoas gostaram\n`+
                `${gostouMT} pessoas gostaram muito\n`+
                `${naoGostou} pessoas não gostaram. Representando ${(naoGostou/opiniao.length)*100}%`)
}

function exe4(){
    let nums = [], soma = 0

    for(let i = 0; i < 8; i++){
        nums[i] = Number(prompt(`Informe um numero [${i}]`))
        soma+= nums[i]
    }

    let media = soma/8
    let acimaMedia = []

    for(let i = 0; i < 8; i++){
        if(nums[i] > media){
            acimaMedia.push(nums[i])
        }
    }

    console.log(`Média: ${(media).toFixed(1)}\n`+
                `Quantidade acima da média: ${acimaMedia.length}\n`+
                `Numeros acima da média: ${acimaMedia}`)
}

function exe5(){
    let nums = [], maiores = 0, menores = 0, iguais = 0

    for(let i = 0; i < 10; i++){
        nums[i] = Number(prompt(`Informe um número [${i}]`))
            if(nums[i] > nums[0]){
                maiores++
            } else if(nums[i] < nums[0]){
                menores++
            } else{
                iguais++
            }
    }

    console.log(`Maiores que o primeiro: ${maiores}\n`+
                `Menores que o primeiro: ${menores}\n`+
                `Iguais: ${iguais}`
    )
}

function exe6(){
    let nums = []

    for(let i = 0; i < 12; i++){
        nums[i] = Number(prompt(`Número [${i}]`))
    }

    console.log(nums)

    let search = Number(prompt(`Número a ser buscado`))
    let posicoes = []

    for(let i = 0; i < 12; i++){
        if(search == nums[i]){
            posicoes.push(i)
        }
    }

    if(posicoes.length == 0){
        console.log(`O número não esta no vetor`)
    }else if(posicoes.length == 1){
        console.log(`O número aparece ${posicoes.length} vez, na posição ${posicoes}`)
    }else{
        console.log(`O número aparece ${posicoes.length} vezes, nas posições ${posicoes}`)
    }
}