var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let led = {
    '1': 2,
    '2': 5,
    '3': 5,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 3,
    '8': 7,
    '9': 6,
    '0': 6
}

let qntTestes = parseInt(lines[0])
let somaLeds = []

for(let i = 1; i <= qntTestes; i++){
    let num = lines[i]
    let soma = 0
    for(let j = 0; j < num.length; j++){
        soma+= led[num[j]]
    }
    somaLeds.push(soma)
}

for(let i = 0; i < somaLeds.length; i++){
    console.log(`${somaLeds[i]} leds`)
}