var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n").map((a) => parseInt(a));

let fibo = [0, 1];
for (let i = 2; i < 64; i++) {
    fibo[i] = fibo[i-1]+fibo[i-2];
}

for(let i = 1; i<= lines[0]; i++){
    console.log(`Fib(${lines[i]}) = ${fibo[lines[i]]}`)
}
