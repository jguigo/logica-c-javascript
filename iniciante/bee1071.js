var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));
let soma = 0;
for(let i = lines[1]+1; i < lines[0]; i++){
    if(i%2 === 1 || i%2 === -1) soma+=i;
}
console.log(soma);
