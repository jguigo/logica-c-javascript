var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));
let result = [0, 1];

for(let i = 2; i < lines[0]; i++){
    result.push(result[i-2]+result[i-1])
}

console.log(result.join(' '))