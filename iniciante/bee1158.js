var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>a.length > 2? a.split(' ').map(b=>parseInt(b)) : parseInt(a));

for(let i = 1; i<=lines[0];i++){
    let soma = lines[i][0];
    if(soma%2===0) soma++
    let somador = soma;
    for(let k = 1; k < lines[i][1]; k++){
        somador += soma+(2*k)
    }
    console.log(somador);
}