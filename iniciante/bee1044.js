var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
let [a,b] = lines.map(a=>parseInt(a));

if(b%a === 0 || a%b === 0 ) console.log('Sao Multiplos');
else console.log('Nao sao Multiplos');