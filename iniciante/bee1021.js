var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let dinheiroF = parseFloat(lines[0]);
let dinheiroI = parseInt(lines[0]);

let n100 = parseInt(dinheiroI/100);
let resto = dinheiroI%100;
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
let m100 = parseInt(resto/1);

let m50 = parseInt((dinheiroF-dinheiroI)/0.5);
resto = (dinheiroF-dinheiroI)%0.5 + 0.00001;
let m25 = parseInt(resto/0.25);
resto = resto%0.25 + 0.00001;
let m10 = parseInt(resto/0.1);
resto = resto%0.1 + 0.00001;
let m05 = parseInt(resto/0.05);
resto = resto%0.05 + 0.00001;
let m01 = parseInt(resto/0.01);


console.log('NOTAS:');
console.log(`${n100} nota(s) de R$ 100.00`);
console.log(`${n50} nota(s) de R$ 50.00`);
console.log(`${n20} nota(s) de R$ 20.00`);
console.log(`${n10} nota(s) de R$ 10.00`);
console.log(`${n5} nota(s) de R$ 5.00`);
console.log(`${n2} nota(s) de R$ 2.00`);
console.log('MOEDAS:');
console.log(`${m100} moeda(s) de R$ 1.00`);
console.log(`${m50} moeda(s) de R$ 0.50`);
console.log(`${m25} moeda(s) de R$ 0.25`);
console.log(`${m10} moeda(s) de R$ 0.10`);
console.log(`${m05} moeda(s) de R$ 0.05`);
console.log(`${m01} moeda(s) de R$ 0.01`);
