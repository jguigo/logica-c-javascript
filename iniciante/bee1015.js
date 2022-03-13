var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
const [p1, p2] = lines;
let dist = Math.sqrt(
   Math.pow(parseFloat(p2.split(" ")[0]) - parseFloat(p1.split(" ")[0]), 2) +
      Math.pow(parseFloat(p2.split(" ")[1]) - parseFloat(p1.split(" ")[1]), 2)
);
console.log(dist.toFixed(4));
