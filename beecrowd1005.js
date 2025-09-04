var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notaA = parseFloat(lines[0]) * 3.5
let notaB = parseFloat(lines[1]) * 7.5

let media = (notaA+notaB)/11

console.log(`MEDIA = ${media.toFixed(5)}`)
