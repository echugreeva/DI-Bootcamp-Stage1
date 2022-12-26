//EX1
const fs = require('fs');
let arr=[];
fs.readFile('RightLeft.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }

    arr = data.split('');
    let stepCount = 0;
    let stepsUntilEnd = arr.length;
    let stepRight=0;
    let stepLeft=0;
    let position = 0;
    
    // amount of steps right to the end of the arr loop

    arr.forEach((e)=>{
        
            if(e == '>') {
                stepCount = stepCount + 1;
                stepsUntilEnd = stepsUntilEnd - 1;
                stepRight = stepRight + 1;
                position = position + 1;
        
            } else {
                stepCount = stepCount + 1; 
                stepsUntilEnd = stepsUntilEnd - 1;
                stepLeft =stepLeft + 1;
                position = position - 1;
            }
        
        
        
    })
    console.log(stepRight);
    console.log(stepLeft);
    console.log(stepCount);
    console.log(position);


    arr.forEach((e)=>{
        if (position == -1) {
            // console.log(`position reached -1 on ${stepCount}`);
            return;
        } else if (e == '<') {
           
                stepCount = stepCount + 1;
                stepsUntilEnd = stepsUntilEnd - 1;
                stepLeft = stepLeft + 1;
                position = position - 1;
        
            } else {
                stepCount = stepCount + 1; 
                stepsUntilEnd = stepsUntilEnd -1;
                stepRight = stepRight + 1;
                position = position + 1;
            }
        }
    )
    console.log(`position reached -1 on ${stepCount}`);
    // console.log(stepRight);
    // console.log(stepLeft);
    // console.log(stepCount);
    // console.log(position);
});




