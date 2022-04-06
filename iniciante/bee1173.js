var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n").map((a) => parseInt(a));
console.log(`N[0] = ${lines[0]}`)
for (let i = 1; i < 10; i++) {
    lines[i] = lines[i-1]*2
    console.log(`N[${i}] = ${lines[i]}`)
}
