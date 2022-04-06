var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n").map((a) => parseInt(a));

for (let i = 0; i < lines.length; i++) {
    if(lines[i]<=0) lines[i] = 1;
    console.log(`X[${i}] = ${lines[i]}`);
}
