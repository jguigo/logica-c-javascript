var [A, B] = lines.map((item) => parseFloat(item));
let media = ((A*3.5)+(B*7.5))/11;
console.log('MEDIA = ' + media.toFixed(5));