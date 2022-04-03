//Fiz, mas o site não aceitou minha resposta.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let di = parseInt(lines[0].replace('Dia ', ''));
let df = parseInt(lines[2].replace('Dia ', ''));
let tinicio = (lines[1].replaceAll(' : ', ' ').split(' '));
let tfinal = (lines[3].replaceAll(' : ', ' ').split(' '));
const [hi,mi,si] = tinicio.map(a=>parseInt(a));
const [hf,mf,sf] = tfinal.map(a=>parseInt(a));

let segundos = 0;
let minutos = 0;
let horas = 0;
let dias = 0;

if(si>sf){
    minutos--;
    segundos = 60+sf-si
} else segundos = sf-si
if(mi>mf){
    horas--;
    minutos += 60 + mf - mi;
} else {
    minutos += mf-mi
    if(minutos < 0){
        minutos = 59;
        horas--
    };
}
if(hi>hf){
    dias--;
    horas += 24+hf-hi;
} else {
    horas += hf-hi
    if(horas < 0){
    horas = 23;
    dias--
    }
}
if(di<=df){
    dias += df-di;
    if(dias < 0) dias = 0;
}


console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);