var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a => parseInt(a)).sort((a,b)=> a-b);

let soma = 0;
for(let i = lines[0]; i<=lines[1]; i++){
    if(i%13 != 0){
        soma+=i;
    }
}
console.log(soma);