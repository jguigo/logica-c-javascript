var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));

lines.reverse();
for(let i =0; i<lines.length;i++){
    console.log(`N[${i}] = ${lines[i]}`);
}
