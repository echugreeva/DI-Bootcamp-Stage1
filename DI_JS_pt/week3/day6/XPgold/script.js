// Ex 1
let numbers = [123, 8409, 100053, 333333333, 7]

numbers.forEach(checkIfDividedByThree);

function checkIfDividedByThree(number) {
    
    if(number%3===0)
    {
        console.log(true)
    } else {
        console.log(false)
    } 
}



// it didn't work without callback function (if I tried to write if statement inside the loop)



// Ex 2  Not working :((


  let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

  let myName = prompt(`What is your name?`).toLowerCase;

  if (myName in Object.keys(guestList))
  {
    console.log(`Hi! I'm ${myName}, and I'm from ${guestList['myName']}.`)
} else {
    console.log(`Hi! I'm a guest`)
}

//key is supposed to be some sort of keyword, but it is not...

// Ex 3

let age = [20,5,12,43,98,55];
let sum = 0;

for (let i=0; i<age.length; i++) {
    sum = sum + age[i];
    
}

console.log(sum);

// how do I set sum to an empty number variable??


let highestNumber = age[0] 
for (let i=1; i<age.length; i++) {
    
    if (highestNumber < age[i]) {
        highestNumber=age[i];
    } 
    console.log(highestNumber);
}