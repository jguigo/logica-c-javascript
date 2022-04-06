var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n").map((a) => parseFloat(a));

console.log(`N[0] = ${lines[0].toFixed(4)}`)

for (let i = 1; i < 100; i++) {
    lines[i] = lines[i-1]/2
    console.log(`N[${i}] = ${lines[i].toFixed(4)}`)
}
