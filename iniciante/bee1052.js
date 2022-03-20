var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let m = parseInt(lines[0]);

let meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

console.log(meses[m-1]);