var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let totalFig = parseInt(lines[0])
let qntCompradas = parseInt(lines[1])
let figurinhas = new Set()

for(let i = 2; i <= qntCompradas+1; i++){
    figurinhas.add(lines[i])
}

let faltando = totalFig - figurinhas.size

console.log(faltando)