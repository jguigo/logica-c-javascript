var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));

let alco = 0;
let gaso = 0;
let disel = 0;

lines.forEach(a=>{
    if(a===1) alco++;
    if(a===2) gaso++;
    if(a===3) disel++;
})

console.log('MUITO OBRIGADO');
console.log(`Alcool: ${alco}`);
console.log(`Gasolina: ${gaso}`);
console.log(`Diesel: ${disel}`);