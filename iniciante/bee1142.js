var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));

for(let i = 0; i < lines[0]; i++){
    console.log(`${1+(4*i)} ${2+(4*i)} ${3+(4*i)} PUM`)
}
