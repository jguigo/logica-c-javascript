var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));

for(let i = 1; i<=lines[0]; i++){
    console.log(`${i} ${Math.pow(i,2)} ${Math.pow(i,3)}`);
    console.log(`${i} ${Math.pow(i,2)+1} ${Math.pow(i,3)+1}`);
}