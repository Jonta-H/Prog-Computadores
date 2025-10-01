var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salarioAtual = parseFloat(lines[0])
let reajuste

if (salarioAtual <= 400) {
    reajuste = 0.15
} else if (salarioAtual <= 800) {
    reajuste = 0.12
} else if (salarioAtual <= 1200) {
    reajuste = 0.1
} else if (salarioAtual <= 2000){
    reajuste = 0.07
} else{
    reajuste = 0.04
}

console.log(`Novo salario: ${salarioAtual+(salarioAtual*reajuste)}`)
console.log(`Reajuste ganho: ${salarioAtual*reajuste}`)
console.log(`Em percentual: ${reajuste*100} %`)