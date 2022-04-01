var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(a=>parseInt(a));

for(let i = 0; i<lines[1]/lines[0]; i++){
    let str = [];
    for(let k = 1; k<=lines[0];k++){
        let num = k+(i*lines[0])
        if(num <= lines[1]) str.push(num)
    }
    console.log(str.join(' '))
}