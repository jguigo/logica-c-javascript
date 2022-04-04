var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));

for(let i = 0; i < lines.length; i++){
    if(lines[i] === 0) break;
    let par = lines[i];
    if(par%2===1 || par%2===-1) par++;
    let soma = par;
    for(let k = 1; k < 5; k++){
        soma += par + (2*k)
    }
    console.log(soma)
}