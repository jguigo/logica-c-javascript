var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n").map((a) => parseInt(a));


for (let i = 1; i <= lines[0]; i++) {
    let primo = 0;
    for(let k =2; k <= lines[i]; k++){
        if(lines[i] > 1){
            if(lines[i]%k === 0 && lines[i] != k){
                primo++;
            }
        }
    }
    if(primo>0) console.log(`${lines[i]} nao eh primo`)
    else console.log(`${lines[i]} eh primo`)
}
