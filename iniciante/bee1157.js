var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a => parseInt(a));

for(let i = 1; i<=lines[0];i++){
    if(lines[0]%i === 0) console.log(i);
}