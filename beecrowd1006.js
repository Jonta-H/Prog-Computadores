var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notaA = parseFloat(lines[0]) * 2
let notaB = parseFloat(lines[1]) * 3
let notaC = parseFloat(lines[2]) * 5

let media = (notaA+notaB+notaC)/10

console.log(`MEDIA = ${media.toFixed(1)}`)
