var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a => a.split(' ').map(b=>parseInt(b)))

lines.forEach(a=>{
    if(a[0]>a[1]) return console.log('Decrescente');
    if(a[0]<a[1]) return console.log('Crescente');
})