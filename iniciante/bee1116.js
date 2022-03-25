var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>a.split(' ').map(b=>parseInt(b)));

for(let i = 1; i <= lines[0]; i++){
    if(lines[i][1] === 0) console.log('divisao impossivel');
    else console.log((lines[i][0]/lines[i][1]).toFixed(1));
}