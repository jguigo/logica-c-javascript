var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));
let sorted = lines.slice().sort((a,b) => a-b);
console.log(sorted[99]);
console.log(lines.indexOf(sorted[99]) + 1);