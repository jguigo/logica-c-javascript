var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n").map((a) => a.split(" ").map((b) => parseInt(b)));
for (let i = 0; i < lines.length; i++) {
   if (lines[i][0] === 0 || lines[i][1] === 0) break;
   if (lines[i][0] > 0) {
      if (lines[i][1] > 0) console.log("primeiro");
      else console.log("quarto");
   }
   if (lines[i][0] < 0) {
      if (lines[i][1] > 0) console.log("segundo");
      else console.log("terceiro");
   }
}
