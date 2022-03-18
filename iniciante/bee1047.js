var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const [hi, mi, hf, mf] = lines.map(a=>parseInt(a));
let tHoras, tMinutos;
tHoras = hf-hi;
tMinutos = mf-mi;

if(hf==hi && mi>=mf){
    tHoras = 24;
}
if(hi>hf){
    tHoras = 24-hi+hf;
}

if(mi>mf){
    tHoras = tHoras - 1;
    tMinutos = 60 + mf - mi;
}

console.log(`O JOGO DUROU ${tHoras} HORA(S) E ${tMinutos} MINUTO(S)`);