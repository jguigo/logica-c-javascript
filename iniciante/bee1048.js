var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
lines = lines.map(a=>parseFloat(a));
let perc;

if(lines[0]<=400){perc = 15}
if(lines[0]>400 && lines[0]<=800){perc = 12}
if(lines[0]>800 && lines[0]<=1200){perc = 10}
if(lines[0]>1200 && lines[0]<=2000){perc = 7}
if(lines[0]>2000){perc = 4}

novoSal = lines[0] * (perc/100 + 1);

console.log(`Novo salario: ${novoSal.toFixed(2)}`)
console.log(`Reajuste ganho: ${(novoSal-lines[0]).toFixed(2)}`)
console.log(`Em percentual: ${perc} %`)