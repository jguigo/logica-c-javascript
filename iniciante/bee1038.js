var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var [x, y] = lines.map(a => parseInt(a));

if (x === 1) console.log(`Total: R$ ${(4*y).toFixed(2)}`);
if (x === 2) console.log(`Total: R$ ${(4.5*y).toFixed(2)}`);
if (x === 3) console.log(`Total: R$ ${(5*y).toFixed(2)}`);
if (x === 4) console.log(`Total: R$ ${(2*y).toFixed(2)}`);
if (x === 5) console.log(`Total: R$ ${(1.5*y).toFixed(2)}`);