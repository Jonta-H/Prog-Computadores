var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let par = [], impar = []

for(let i = 0; i < 15; i++){
    if(parseInt(lines[i]) % 2 === 0){
        if(par.length < 5){
            par.push(lines[i])
        } else{
            for(let j = 0; j < par.length; j++){
                console.log(`par[${j}] = ${par[j]}`)
            }
            par.length = 0
            par.push(lines[i])
        }
    } else{
        if(impar.length < 5){
            impar.push(lines[i])
        } else { 
            for(let j = 0; j < impar.length; j++){
                console.log(`impar[${j}] = ${impar[j]}`)
            }
            impar.length = 0
            impar.push(lines[i])
        }
    }
}
for(let i = 0; i < impar.length; i++){
    console.log(`impar[${i}] = ${impar[i]}`)
}
for(let i =0; i < par.length; i++){
    console.log(`par[${i}] = ${par[i]}`)
}