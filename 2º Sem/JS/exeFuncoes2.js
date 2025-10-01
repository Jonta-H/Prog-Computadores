function main() {
    let valor = 10, vetor = [10, 20, 30]

    alterarNumero(valor)
    console.log(`Valor: ${valor}`)

    alterarVetor(vetor)
    console.log(`Vetor: ${vetor}`)
}
main()

function alterarNumero(a) {
    a += 100
}

function alterarVetor(vetor) {
    vetor[0] = 100
}