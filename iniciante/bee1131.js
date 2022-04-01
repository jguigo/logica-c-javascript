var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a => a.length > 2 ? a.split(' ').map(b => parseInt(b)) : parseInt(a));
let inter = 0;
let gremio = 0;
let empate = 0;

lines.forEach(a => {
    if (a.length%2 === 0){
        if(a[0] > a[1]) inter++;
        if(a[0] < a[1]) gremio++;
        if(a[0] === a[1]) empate++;
        console.log('Novo grenal (1-sim 2-nao)');
    }
})
console.log(`${Math.floor(lines.length/2)} grenais`);
console.log(`Inter:${inter}`);
console.log(`Gremio:${gremio}`);
console.log(`Empates:${empate}`);
if(inter > gremio) console.log('Inter venceu mais')
if(inter < gremio) console.log('Gremio venceu mais')
if(inter === gremio) console.log('Nao houve vencedor')

