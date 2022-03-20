//Fiz, mas o site não aceitou minha resposta.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let di = parseInt(lines[0].replace('Dia ', ''));
let df = parseInt(lines[2].replace('Dia ', ''));
let tinicio = (lines[1].replaceAll(' : ', ' ').split(' '));
let tfinal = (lines[3].replaceAll(' : ', ' ').split(' '));
const [hi,mi,si] = tinicio.map(a=>parseInt(a));
const [hf,mf,sf] = tfinal.map(a=>parseInt(a));

let dia = df-di;
let horas = hf-hi;
let minutos = mf-mi;
let segundos = sf - si;

if(hf<hi){
    dia--;
    horas = 24+hf-hi;
}
if(mf<mi){
    horas--;
    minutos = 60+mf-mi;
} 
if(sf<si){
    minutos--;
    segundos = 60+mf-mi;
} 

console.log(`${dia} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);
