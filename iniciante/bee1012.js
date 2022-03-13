var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const [A, B, C] = lines.map(item => parseFloat(item));

let tri = (A*C)/2; 
let cir = 3.14159*C*C;
let trap = ((A+B) * C)/2;
let quadr = B*B;
let ret = A*B;

console.log(`TRIANGULO: ${tri.toFixed(3)}`);
console.log(`CIRCULO: ${cir.toFixed(3)}`);
console.log(`TRAPEZIO: ${trap.toFixed(3)}`);
console.log(`QUADRADO: ${quadr.toFixed(3)}`);
console.log(`RETANGULO: ${ret.toFixed(3)}`);
