var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let dinheiro = parseInt(lines[0]);

let n100 = parseInt(dinheiro/100);
let resto = dinheiro%100;
let n50 = parseInt(resto/50);
resto = resto%50;
let n20 = parseInt(resto/20);
resto = resto%20;
let n10 = parseInt(resto/10);
resto = resto%10;
let n5 = parseInt(resto/5);
resto = resto%5;
let n2 = parseInt(resto/2);
resto = resto%2;
let n1 = parseInt(resto);

console.log(dinheiro);
console.log(`${n100} nota(s) de R$ 100,00`);
console.log(`${n50} nota(s) de R$ 50,00`);
console.log(`${n20} nota(s) de R$ 20,00`);
console.log(`${n10} nota(s) de R$ 10,00`);
console.log(`${n5} nota(s) de R$ 5,00`);
console.log(`${n2} nota(s) de R$ 2,00`);
console.log(`${n1} nota(s) de R$ 1,00`);