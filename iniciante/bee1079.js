var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let narr = [];
for(let i = 1; i <= parseInt(lines[0]); i++){
    narr = lines[i].split(' ').map(a=>parseFloat(a));
    console.log(((narr[0]*2 + narr[1]*3 + narr[2]*5)/10).toFixed(1));
}