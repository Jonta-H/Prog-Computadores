var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numFuncionario = parseInt(lines[0])
let horasTrabalhadas = parseInt(lines[1])
let valorHora = parseFloat(lines[2])

let salario = horasTrabalhadas*valorHora

console.log(`NUMBER = ${numFuncionario}\nSALARY = U$ ${salario.toFixed(2)}`)