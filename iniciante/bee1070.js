var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));

for(let i = lines[0] ; i <= lines[0]+11; i++){
    if(i%2 === 1) console.log(i);
}