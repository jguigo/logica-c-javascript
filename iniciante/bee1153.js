var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));

let fat = 1;
for(let i = 1; i<=lines[0];i++){
    fat *= i;
}

console.log(fat)