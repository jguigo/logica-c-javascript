var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));
for(let i = 1; i<=10; i++){
    console.log(`${i} x ${lines[0]} = ${i*lines[0]}`)
}