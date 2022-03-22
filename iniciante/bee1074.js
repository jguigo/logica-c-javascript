var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(a=>parseInt(a));
for(let i = 1; i<lines.length; i++){
    if(lines[i] === 0) console.log('NULL');
    else{
        if(lines[i]%2 === 0){
            if(lines[i]>0) console.log('EVEN POSITIVE')
        }
        if(lines[i]%2 === -0){
            if(lines[i]<0) console.log('EVEN NEGATIVE')
        }
        if(lines[i]%2 === 1) console.log('ODD POSITIVE');
        if(lines[i]%2 === -1) console.log('ODD NEGATIVE');
    }
}
