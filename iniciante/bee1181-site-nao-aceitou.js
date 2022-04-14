var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let matriz = [[],[],[],[],[],[],[],[],[],[],[],[]];
let contador = 0;
let [linha, operacao, ...valores] = lines;
let resultado = 0;

linha = parseInt(linha);
valores = valores.map(a=>parseFloat(a));


for(let i = 0; i<12; i++){
    for(let k = 0; k<12; k++){
        matriz[i][k] = valores[contador];
        contador++;
    }
}
matriz[linha].forEach(a=>{
    resultado += a;
})
if(operacao == 'M\r') resultado /= 12;
console.log(`${parseFloat(resultado).toFixed(1)}\n`);