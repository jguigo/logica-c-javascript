//site não aceitou minha resolução. Segue o link do problema: https://www.beecrowd.com.br/judge/pt/runs/code/26953070

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
lines = lines.map(a=>a.split(' ').sort((a,b) => a-b));

lines.forEach(a=>{
    let sum = 0;
    let text = '';
    if(parseInt(a[0]) === 0) return;
    for (let i = parseInt(a[0]); i <= parseInt(a[1]) + 1; i++) {
        if(i <= parseInt(a[1])){
            sum += i;
            text += `${i} `;
        }
        else {
            text += `Sum=${sum}`;
            return console.log(text);
        }
    }
});