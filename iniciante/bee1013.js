var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const maior = lines.map(item => parseInt(item));
console.log(`${Math.max(maior[0],maior[1],maior[2])} eh o maior`);
