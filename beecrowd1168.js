const { parse } = require('path');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let leds = []   // variavel para guardar a qnt de leds para cada numero

for(let i = 1; i < lines.length; i++){
    let n = lines[i].split("")  // separa cada dígito do numero
    let somaLED = 0     // variavel para somar a qnt de leds necessario por dígito

    for(let j = 0; j < n.length; j++){      // passa por cada dígito e soma a qnt de leds correspondente
        if(parseInt(n[j]) === 1){
            somaLED+=2
        } else if(parseInt(n[j]) === 4){
            somaLED+=4
        } else if(parseInt(n[j]) === 7){
            somaLED+=3
        } else if(parseInt(n[j]) === 8){
            somaLED+=7
        } else if(parseInt(n[j]) === 2 || parseInt(n[j]) === 3 || parseInt(n[j]) === 5){
            somaLED+=5
        } else {
            somaLED+=6
        }
    }
    leds.push(somaLED)  // guarda a soma total de leds necessarios para cada numero
}

for(let i = 0; i < leds.length; i++){   // output
    console.log(`${leds[i]} leds`)
}
