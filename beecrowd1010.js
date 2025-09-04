var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pecas1 = lines[0].split(" ")
let pecas2 = lines[1].split(" ")

let totalPecas1 = parseInt(pecas1[1]) * parseFloat(pecas1[2])
let totalPecas2 = parseInt(pecas2[1]) * parseFloat(pecas2[2])
let total = totalPecas1+totalPecas2

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)