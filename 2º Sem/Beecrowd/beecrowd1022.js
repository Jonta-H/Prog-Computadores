var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let qntTestes = parseInt(lines[0])

for (let i = 1; i <= qntTestes; i++) {
    let valores = lines[i].split(" ")
    let n1 = parseInt(valores[0]), d1 = parseInt(valores[2]), n2 = parseInt(valores[4]), d2 = parseInt(valores[6])
    let numerador, denominador, formaFinal
    switch (valores[3]) {
        case "+":
            numerador = (n1*d2+n2*d1)
            denominador = (d1*d2)
            formaFinal = simplificar(numerador, denominador)
            console.log(`${numerador}/${denominador} = ${formaFinal[0]}/${formaFinal[1]}`)
            break
        case "-":
            numerador = (n1*d2-n2*d1)
            denominador = (d1*d2)
            formaFinal = simplificar(numerador, denominador)
            console.log(`${numerador}/${denominador} = ${formaFinal[0]}/${formaFinal[1]}`)
            break
        case "*":
            numerador = (n1*n2)
            denominador = (d1*d2)
            formaFinal = simplificar(numerador, denominador)
            console.log(`${numerador}/${denominador} = ${formaFinal[0]}/${formaFinal[1]}`)
            break
        default:
            numerador = (n1*d2)
            denominador = (d1*n2)
            formaFinal = simplificar(numerador, denominador)
            console.log(`${numerador}/${denominador} = ${formaFinal[0]}/${formaFinal[1]}`)

    }
}

function simplificar(a, b) {
    let i = 2
    do {
        if (a % i === 0 && b % i === 0) {
            a /= i, b /= i
        } else {
            i++
        }
    } while (i < a && i < b)
    let valor = [a, b]
    return valor
}