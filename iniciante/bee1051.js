var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let sal = parseFloat(lines[0]);
let imp = 0

if(sal <= 2000) console.log('Isento');
if(sal > 2000 && sal <=3000){
    imp = 8;
    console.log(`R$ ${((sal-2000)*imp/100).toFixed(2)}`)
}
if(sal > 3000 && sal <=4500) {
    imp = 18;
    console.log(`R$ ${((1000*0.08)+((sal-3000)*imp/100)).toFixed(2)}`)
}
if(sal > 4500) {
    imp = 28;
    console.log(`R$ ${((1000*0.08)+(1500*0.18)+((sal-4500)*imp/100)).toFixed(2)}`);
}
