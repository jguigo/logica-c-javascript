var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));

let soma = 0;
let menos = 0;
let cabo=0
lines.forEach(a=>{
    if(a<=0 || cabo>=1){
        cabo++
        return;
    }
    menos++
    soma+=a;
})
console.log((soma/(lines.length-(lines.length-menos))).toFixed(2))