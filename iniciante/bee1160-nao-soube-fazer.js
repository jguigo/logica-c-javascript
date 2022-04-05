var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a => a.length > 6 ? a.split(' ').map(b=>parseFloat(b)) : parseInt(a));
for(let i = 1; i<=lines[0]; i++){
    let a = lines[i][0];
    let b = lines[i][1];
    let supA = a;
    let supB = b;
    let aa = a;
    let bb = b;
    let cresA = lines[i][2];
    let cresB = lines[i][3];
    if(cresA > cresB){
        for(let anos = 1; aa <= bb; anos++){
            
            if(cresB == 0){
                a += supA * (cresA/100);
                b += supB * (cresB/100);                
            }else{
                a += a * (cresA/100);
                b += b * (cresB/100);
            }
            let aa = Math.floor(a);
            let bb = Math.floor(b);
            if(anos > 100){
                console.log('Mais de 1 seculo.');
                break;
            }
            if(aa > bb){
                console.log(`${anos} anos.`);
                break;
            }
        }
    }
}