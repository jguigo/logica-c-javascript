var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a => parseInt(a)).sort((a,b)=> a-b);

for(let i = lines[0]+1; i < lines[1]; i++){
    if(i%5 ===  2 || i%5 === 3) console.log(i)
}