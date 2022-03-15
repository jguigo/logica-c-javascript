var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
const [a, b, c] = lines.map(item => parseFloat(item));

const delta = b * b - 4 * a * c;
if(delta < 0 || a === 0){console.log('Impossivel calcular');}
else{
const r1 = (-b+Math.sqrt(delta))/(2*a);
const r2 = (-b-Math.sqrt(delta))/(2*a);
console.log(`R1 = ${r1.toFixed(5)}`);
console.log(`R2 = ${r2.toFixed(5)}`);
}