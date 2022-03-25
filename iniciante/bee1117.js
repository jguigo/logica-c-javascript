var input = require('fs').readFileSync('stdin', 'utf8');
lines = input.split('\n').map(a => parseFloat(a));
let soma = 0;
let denominador = 0;

for(let i = 0; i < lines.length; i++){
    if(lines[i] < 0 || lines[i] > 10) console.log('nota invalida');
    else{
        if(denominador < 2){
            soma += lines[i]
            denominador++;
        }
    }
}

console.log(`media = ${(soma/denominador).toFixed(2)}`);