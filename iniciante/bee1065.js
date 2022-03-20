var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
lines = lines.map((a) => parseInt(a));
let pares = 0;
lines.forEach(a => {
    if(a%2 ===0) pares++;
});
console.log(`${pares} valores pares`);