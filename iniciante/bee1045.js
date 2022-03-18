var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

var [a,b,c] = lines.sort((a,b) => b-a).map((a) => parseFloat(a));

if (a + b > c && a + c > b && b + c > a) {
   if (a * a == b * b + c * c) console.log("TRIANGULO RETANGULO");
   if (a * a > b * b + c * c) console.log("TRIANGULO OBTUSANGULO");
   if (a * a < b * b + c * c) console.log("TRIANGULO ACUTANGULO");
   if (a == b && a == c) console.log("TRIANGULO EQUILATERO");
   if ((a == b && a != c) || (a == c && a != b) || (b == c && b != a)) console.log("TRIANGULO ISOSCELES");
}
else console.log("NAO FORMA TRIANGULO");