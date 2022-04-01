var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(a=>parseInt(a));
let arr = []
let soma = 0;
lines.forEach(a=>{
    if(a>0) arr.push(a);
})

for(let i = arr[1]-1; i>=0; i--){
    soma +=(arr[0]+i);
}
console.log(soma);