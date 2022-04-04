var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?

let s = 0;
let cont = 1;
for(let i = 1; cont <= 39; i*=2){
    s += cont/i;
    cont+=2;
}
console.log(s.toFixed(2));