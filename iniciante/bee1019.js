var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let tempoS = parseInt(lines[0]);
let h = tempoS / 3600;
let resto = tempoS % 3600;
let m = resto / 60;
resto = resto % 60;

console.log(`${Math.floor(h)}:${Math.floor(m)}:${Math.floor(resto)}`);