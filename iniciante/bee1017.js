var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const [t, v] = lines.map(item => parseInt(item));
const car = 12;
let litros = (t*v)/car;
console.log(litros.toFixed(3));
