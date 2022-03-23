var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>a.split(' '));

let sum;
for(let i = 1; i <= parseInt(lines[0]); i++){
    sum = 0;
    if(parseInt(lines[i][0])>parseInt(lines[i][1])){
        for(let j = parseInt(lines[i][1])+1; j < parseInt(lines[i][0]) ; j++){
            if(j%2 === 1) sum += j;
        }
        console.log(sum);
    }
    else if(parseInt(lines[i][0])<parseInt(lines[i][1])) {
        for(let j = parseInt(lines[i][0])+1; j < parseInt(lines[i][1]) ; j++){
            if(j%2 === 1) sum += j;
        }
        console.log(sum);
    }
    else console.log(0);
}