function main(){
    let num = Number(prompt(`Informe um número: `))

    mostrarDobro(num)
    console.log(`O quadrado é: ${mostrarQuadrado(num)}`)

}

function mostrarDobro(a){
    console.log(`O dobro é ${a*2}`)
}
function mostrarQuadrado(a){
    let quadrado = a**2
    return quadrado
}
main()