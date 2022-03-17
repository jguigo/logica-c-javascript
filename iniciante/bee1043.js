var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");
let [a, b, c] = lines.map((a) => parseFloat(a));

if (a + b > c && a + c > b && b + c > a) {
    console.log(`Perimetro = ${(a+b+c).toFixed(1)}`);
} else console.log(`Area = ${(((a+b)*c)/2).toFixed(1)}`)
