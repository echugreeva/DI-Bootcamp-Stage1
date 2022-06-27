
//ex 1

let favFood = "meat";

let favMeal ="lunch";

console.log(`I eat ${favFood} at every ${favMeal}`);


//ex 2 part1 

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let numberOfSeries = myWatchedSeries.length;

let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;

console.log(myWatchedSeriesSentence);

console.log(`I watched ${numberOfSeries} series: ${myWatchedSeriesSentence}`);

//ex part2

myWatchedSeries.splice(2,1,"friends");

console.log(myWatchedSeries);

myWatchedSeries.push("pachinko");

console.log(myWatchedSeries);

myWatchedSeries.shift();

console.log(myWatchedSeries);

console.log(myWatchedSeries[0][2],);

console.log(myWatchedSeries);


//ex 3

let celTem = 30;

let FarTem = celTem * 1.8 + 32;

console.log(`${celTem}°C is ${FarTem}°F`);

//ex 4

let c;
let a = 34;
let b = 21;

console.log(a+b);
 //first expression
// Prediction: 55
// Actual:

a = 2;

console.log(a+b); 
//second expression
// Prediction: 23
// Actual:

//What is the value of c?

//prediction: undefined

console.log(3 + 4 + '5');

// Prediction: 23
// Actual:75