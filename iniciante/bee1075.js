var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));

for(let i = 0; i <= 10000; i++){
    if (i%lines[0] === 2) console.log(i);
}