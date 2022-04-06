var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n").map((a) => parseFloat(a));

for (let i = 0; i < 100; i++) {
    if(lines[i]<=10){
        console.log(`A[${i}] = ${lines[i].toFixed(1)}`)
    }
}
