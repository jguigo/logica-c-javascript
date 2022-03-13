var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [r] = lines.map(item => parseInt(item));
let vol = (4/3)* 3.14159* (r*r*r)
console.log(`VOLUME = ${vol.toFixed(3)}`);