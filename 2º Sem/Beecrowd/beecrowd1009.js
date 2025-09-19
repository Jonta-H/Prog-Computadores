var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salarioFixo = parseFloat(lines[1])
let vendas = parseFloat(lines[2])

let comissao = vendas*0.15
let salarioTotal = salarioFixo+comissao

console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`)