var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
lines = lines.map(a=>parseFloat(a));
let cont = 0;
lines.forEach(a=>{
    if(a>0) cont++;
})
console.log(`${cont} valores positivos`);