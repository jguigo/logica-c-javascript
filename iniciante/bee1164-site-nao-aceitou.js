var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a => parseInt(a));
for(let i = 1; i <= lines[0]; i++){
    let soma = 0;
    for(let k = 1; soma < 1000000000; k++){
        if(lines[i]%k === 0){
            soma+=k;
        }
        if(k === lines[i] || soma>lines[i]){
            console.log(`${lines[i]} nao eh perfeito`);
            break;
        }
        if(soma === lines[i]){
            console.log(`${lines[i]} eh perfeito`);
            break;
        }
    }
}