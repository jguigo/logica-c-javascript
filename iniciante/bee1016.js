var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let d = parseInt(lines[0]);
console.log(`${d*2} minutos`);
