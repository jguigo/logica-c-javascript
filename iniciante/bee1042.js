var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
lines = lines.map(a=>parseInt(a))

lines.slice().sort((a,b)=> a-b).forEach(a=>console.log(a));
console.log('');
lines.forEach(a=>console.log(a));
