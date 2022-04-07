var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

lines.shift();
arr = lines.join('\t').split('\t').map(a => parseInt(a));
console.log(`Menor valor: ${Math.min(...arr)}`);
console.log(`Posicao: ${arr.indexOf(Math.min(...arr))}`);