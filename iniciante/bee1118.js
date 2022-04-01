var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a => parseFloat(a));

let soma = 0;
let cont = 0;

for(let i = 0; i<lines.length; i++){
    if(lines[i] >= 0 && lines[i] <= 10){
        if(cont <= 2){
            if(cont < 2){
                soma += lines[i];
            }
            cont++;
        } 
        if(cont === 2){
            console.log(`media = ${(soma/2).toFixed(2)}`)
        }
        if(cont === 3){
            console.log('novo calculo (1-sim 2-nao)')
        }
        if(cont === 3){
            if(lines[i] === 1){
                soma = 0;
                cont = 0
            } if(lines[i] === 2){
                break;
            }
        }
    }
    else console.log('nota invalida');
}