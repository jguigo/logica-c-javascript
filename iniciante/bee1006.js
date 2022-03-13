var [A, B, C] = lines.map((item) => parseFloat(item));
let media = ((A*2)+(B*3)+(C*5))/10;
console.log('MEDIA = ' + media.toFixed(1));