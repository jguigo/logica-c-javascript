var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for(let i = 0; i < lines.length; i++){
    if(lines[i] != 2002) console.log('Senha Invalida');
    else {
        console.log('Acesso Permitido');
        break;
    }
}