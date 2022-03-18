var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

const [i, f] = lines.map((a) => parseInt(a));
let tTotal;
i >= f ? tTotal = 24 - i + f : tTotal = f-i;

console.log(`O JOGO DUROU ${tTotal} HORA(S)`);
