var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [x,y] = lines.map(item => parseFloat(item));
let kmL = x/y;
console.log(`${kmL.toFixed(3)} km/l`);