var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=> a.split(' '))
let r = 0, s = 0, c = 0;

for(let i = 1; i<=parseInt(lines[0]); i++){
    if(lines[i][1] === 'R' || lines[i][1] === 'R\r'){
        r += parseInt(lines[i][0]);
    }
    if(lines[i][1] === 'S' || lines[i][1] === 'S\r'){
        s += parseInt(lines[i][0]);
    }
    if(lines[i][1] === 'C' || lines[i][1] === 'C\r'){
        c += parseInt(lines[i][0]);
    }
}

console.log(`Total: ${r+s+c} cobaias`)
console.log(`Total de coelhos: ${c}`)
console.log(`Total de ratos: ${r}`)
console.log(`Total de sapos: ${s}`)
console.log(`Percentual de coelhos: ${((c/(r+s+c))*100).toFixed(2)} %`)
console.log(`Percentual de ratos: ${((r/(r+s+c))*100).toFixed(2)} %`)
console.log(`Percentual de sapos: ${((s/(r+s+c))*100).toFixed(2)} %`)