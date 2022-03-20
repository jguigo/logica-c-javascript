//site não aceitou minha resposta

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
lines = lines.map(a=>parseInt(a))

let par = 0, positivo = 0, negativo = 0;

lines.forEach(a =>{
    if(a%2===0) par++;
    if(a>0) positivo++;
    if(a<0) negativo++
})

console.log(`${par} valor(es) par(es)`)
console.log(`${lines.length-par} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`)
console.log(`${negativo} valor(es) negativo(s)`)
