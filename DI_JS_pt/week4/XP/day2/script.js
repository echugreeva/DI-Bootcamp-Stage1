
// Ex 1 
function infoAboutMe() {
    console.log(`Hi I'm Lena, I'm 32 and I like to go to the beach`);

}

function infoAboutPerson(personName, personAge, personFavoriteColor) {

    console.log (`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


// Ex 2

function calculateTip() {
    let bill = Number(prompt(`Enter you bill sum`));
    let totalSum = 0;
    switch (true) {
        case (bill<50):
            totalSum = bill+bill*0.2
            console.log(totalSum);
            break;
        case (50 <= bill && bill <= 200):
            totalSum = bill+bill*0.15
            console.log(totalSum);
            break;
        default:
            totalSum = bill+bill*0.1
            console.log(totalSum);

    }
    
}

calculateTip();


// Ex 3  //sum is not working

function isDivisible() {
    let divisibleBy23 = [];
    for (let i = 0; i <= 500; i++) {
        if( i%23 === 0) {
            divisibleBy23.push(i);
            console.log(i);
        }
    }
    
    let sum = 0;
    
    divisibleBy23.forEach(i => sum += i);

    console.log(sum);
    
}


function isDivisible2(divider) {
    let divisibleByDivider = [];
    for (let i = 0; i <= 500; i++) {
        if( i%divider === 0) {
            divisibleByDivider.push(i);
            console.log(i);
        }
    }
    let sum = 0;
    
    divisibleByDivider.forEach(i => sum += i);

    console.log(sum);

}

isDivisible2(3);
isDivisible2(45);

// Ex 4   sum not working

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ['banana','orange','apple'];


// check if item in stock, if yes, get price, and sum the prices together
function myBill() {     
    let totalBill = 0;   
    for (let i = 0; i < shoppingList; i++) {

        for(shoppingList[i] in stock) {
            if (stock[shoppingList[i]] > 0) {
                totalBill = totalBill + prices[shoppingList[i]];
                console.log(totalBill);
            }
            
        }

}

}

    
    
 
    



//  Ex 5  sum not working
 function changeEnough(itemPrice, amountOfChange) {
    
    let sumOfChange = 0

for (i=0; i < length.amountOfChange; i++) {
    switch(true) {
    case (i === 0):
    sumOfChange += amountOfChange[i]*0.25
    break;
    case (i === 1):
    sumOfChange += amountOfChange[i]*0.10
    break;
    case (i === 2):
    sumOfChange += amountOfChange[i]*0.05
    break;
    case (i === 3):
    sumOfChange += amountOfChange[i]*0.01
    break;
}

}

console.log(sumOfChange);


     if(sumOfChange >= itemPrice) {
         return true;
     } else {
        return false;
     }

 }

//  Ex 6


function hotelCost() {

    let nights = Number(prompt(`How many nights are you staying?`));

    if (isNaN(nights)) {

    do { nights = Number(prompt(`please, specify number of night or we won't be able to provide cost?`)); }
    
        while (isNaN(nights));
    } 

return nights * 140;
}


// not working switch part, always returns default cost
function planeRideCost() {
    let destination = prompt(`Where are you flying`);

    if (typeof destination !== 'string') {
        do {
            destination = prompt(`Please specify where are you flying`);
        }
        while (typeof destination !== 'string');
    }

    switch(true){
        case (destination.match(/London/i)):
        return `183$`
        break;
        case (destination.match(/Paris/i)):
        return `220$`
        break;
        default:   
        return `300$`; 


    }
    }

    