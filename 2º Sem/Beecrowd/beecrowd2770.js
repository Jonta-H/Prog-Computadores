var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(/\s+/);

let i = 0
while(i < lines.length){
    let X = parseInt(lines[i++])
    let Y = parseInt(lines[i++])
    let P = parseInt(lines[i++])
    for(let j = 0; j < P; j++){
        let Xi = parseInt(lines[i++])
        let Yi = parseInt(lines[i++])
        if((Xi <= X && Yi <= Y) || (Xi <= Y && Yi <= X)){
            console.log("Sim")
        } else{
            console.log("Nao")
        }
    }
}