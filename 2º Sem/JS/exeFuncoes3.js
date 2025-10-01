function main() {
    let nomes = ['Jorge', 'André', 'Ana', 'Maria', 'Beatriz']

    exibirMaiusculo(nomes)
    substituir(nomes)
    exibir(nomes)
}
main()

function exibirMaiusculo(vetor){
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = vetor[i].toUpperCase()
    }
}

function substituir(vetor){
    for(let i = 0; i < vetor.length; i++){
        let nome = vetor[i]
        if(nome[0] == 'A'){
            vetor[i] = 'ANÔNIMO'
        }
    }
}

function exibir(vetor){
    for(let i = 0; i < vetor.length; i++){
        console.log(vetor[i])
    }
}