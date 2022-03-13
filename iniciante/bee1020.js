var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let tdias = parseInt(lines[0]);
let a = tdias/365;
let resto = tdias%365;
let m = resto/30;
resto = resto % 30;

console.log(`${Math.floor(a)} ano(s)`);
console.log(`${Math.floor(m)} mes(es)`);
console.log(`${resto} dia(s)`);