var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n").map((a) => parseInt(a));
let inN = 0;
for(let i = 1; i<lines.length;i++){
    if(lines[i]>=10 && lines[i]<=20) inN++;
}
console.log(`${inN} in`)
console.log(`${lines[0] - inN} out`)