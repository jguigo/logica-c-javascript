var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));
let n = [];
let contador = 0;
for(let i = 0; i<1000;i++){
    if(contador > lines[0]-1){
        contador = 0;
    }
    n[i] = contador;
    console.log(`N[${i}] = ${n[i]}`)
    contador++;


}
