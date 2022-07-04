
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

// Ex 4

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
let totalBill = 0;   

// check if item in stock, if yes, get price, and sum the prices together
function myBill() {

     

for (let i = 0; i<shoppingList; i++) {

for(shoppingList[i] in stock) {
    if (stock[shoppingList[i]] > 0) {
        totalBill += prices[shoppingList[i]];
    }
}

console.log(totalBill);

}
}

    
    
 
    



//  Ex 5
