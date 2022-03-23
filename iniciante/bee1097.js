let plus = 7
for(let i = 1; i<10;i+=2){
    for(let j = plus; j>plus-3; j--){
        console.log(`I=${i} J=${j}`)
    }
    plus+=2;
}