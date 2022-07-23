
//ex 1

let favFood = "meat";

let favMeal ="lunch";

console.log(`I eat ${favFood} at every ${favMeal}`);


//ex 2 part1 

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

//  let numberOfSeries = myWatchedSeries.length;

let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;

console.log(myWatchedSeriesSentence);

// console.log(`I watched ${numberOfSeries} series: ${myWatchedSeriesSentence}`);


console.log(`I watched ${myWatchedSeries.length} series: ${myWatchedSeriesSentence}`);



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
// Actual: 55

a = 2;

console.log(a+b); 
//second expression
// Prediction: 23
// Actual: 23

//What is the value of c?

//prediction: undefined
// Actual: undefined


console.log(3 + 4 + '5');

// Prediction: 75
// Actual:75

//ex 5    I put v in actual if the answer was same as prediction

typeof(15)
// Prediction: number
// Actual:v 

typeof(5.5)
// Prediction: number
// Actual:v

typeof(NaN)
// Prediction: number
// Actual: v

typeof("hello")
// Prediction: string
// Actual: v

typeof(true)
// Prediction: bollean
// Actual: v

typeof(1 != 2)
// Prediction: bollean
// Actual:v

"hamburger" + "s"
// Prediction: "hamburgers"
// Actual: v

"hamburgers" - "s"
// Prediction: error
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: '13' +-

"1" - "3"
// Prediction: error
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: v

"johnny" - 5
// Prediction: error
// Actual: NaN

99 * "hello"
// Prediction: "hello"
// Actual: Uncaught SyntaxError: Unexpected token '*'

1 != 1
// Prediction: false
// Actual: v

1 == "1" 
// Prediction: true
// Actual: v

1 === "1"
// Prediction: false
// Actual: v

// ex 6--------------------------------------------I put v in actual if the answer was same as prediction

5 + "34"
// Prediction: '534'
// Actual:v

5 - "4"
// Prediction: NaN
// Actual: 1

10 % 5
// Prediction: 0
// Actual:v

5 % 10
// Prediction: 1
// Actual: 5

"Java" + "Script"
// Prediction: 'JavaScript'
// Actual: v

" " + " "
// Prediction:"  "
// Actual: v

" " + 0
// Prediction: " 0"
// Actual:

true + true
// Prediction: true
// Actual: 2

true + false
// Prediction: false / after true+true check : 1
// Actual: 1

false + true
// Prediction: false  / after true+true check : 1
// Actual: 1

false - true
// Prediction: NaN / after true+true check : -1
// Actual: -1

!true
// Prediction: false
// Actual: v

3 - 4
// Prediction: -1
// Actual: v

"Bob" - "bill"
// Prediction: NaN
// Actual: v
