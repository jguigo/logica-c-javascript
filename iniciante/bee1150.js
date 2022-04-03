var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));
let x = 0;
let z = 0;
let contador = 0;
for(let i = 0; i<lines.length; i++){
    if(lines[0]<lines[i]){
        z = lines[i];
        break;
    }
}
for(let i = 0; x < z; i++){
    x += lines[0]+i;
    contador = i+1
}
console.log(contador);