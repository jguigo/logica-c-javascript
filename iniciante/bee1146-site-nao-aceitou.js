var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));

lines.forEach(a=>{
    let str = ''
    for(let i = 1; i<=a;i++){
        str += (`${i} `);
    }
    console.log(str)
})