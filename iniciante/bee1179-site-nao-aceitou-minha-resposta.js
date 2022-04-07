var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));

let par = [];
let impar = [];


for(let i = 0; i<lines.length; i++){
    if(impar.length === 5) impar = [];
    if(par.length === 5) par = [];

    if(lines[i]%2 === 1 || lines[i]%2 === -1){
        impar.push(lines[i]);
    }
    else{
        par.push(lines[i]);
    }

    if(impar.length === 5){
        for(let k = 0; k<impar.length; k++){
            console.log(`impar[${k}] = ${impar[k]}`);
        }
    }
    if(par.length === 5){
        for(let k = 0; k<par.length; k++){
            console.log(`par[${k}] = ${par[k]}`);
        }
    }
}

if(impar.length>0 && impar.length<5){
    for(let i = 0; i < impar.length;i++){
        console.log(`impar[${i}] = ${impar[i]}`);
    }
}
if(par.length>0 && par.length<5){
    for(let i = 0; i < par.length;i++){
        console.log(`par[${i}] = ${par[i]}`);
    }
}
