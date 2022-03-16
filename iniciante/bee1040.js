var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var [n1,n2,n3,n4, final] = lines.map(a=>parseFloat(a));

let media = (n1*2+n2*3+n3*4+n4*1)/10;
let mediaf = (media+final)/2;

if(media >= 7){
    console.log(`Media: ${media}`);
    console.log(`Aluno aprovado.`);
}
else if(media < 5){
    console.log(`Media: ${media}`);
    console.log(`Aluno reprovado.`);
}
else{
    console.log(`Media: ${media}`);
    console.log(`Aluno em exame.`);
    console.log(`Nota do exame: ${final}`);
    if(media >= 5){console.log('Aulo aprovado.');}
    else{console.log('Aluno reprovado.');}
    console.log(`Media final: ${mediaf}`);
}