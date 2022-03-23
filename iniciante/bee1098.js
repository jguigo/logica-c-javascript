for(let i = 0; i<=2 ;i+=0.2){
    for(let j = 1 ; j < 4; j++){
        if(i === 0 || i === 1 || i > 1.8) console.log(`I=${parseFloat(i).toFixed(0)} J=${parseFloat(j+i).toFixed(0)}`)
        else console.log(`I=${parseFloat(i).toFixed(1)} J=${parseFloat(j+i).toFixed(1)}`);
    }
}