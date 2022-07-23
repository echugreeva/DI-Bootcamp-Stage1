//ex1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
//prediction: 3
// run in the console:
q1()

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

//prediction: 0, 5

// run in the console:
q22()
q2()
q22()

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
//prediction:  "hello"

// run in the console:
q3()
q32()

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

//prediction:  "test"


// run in the console:
q4()

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

//prediction: 5, 5


//ex2 
function winBattle(){
    return true;
}

// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

let winBattle3 = () => true;

let experiencePoints = winBattle3()?10 : 1;
console.log(experiencePoints);


//ex3  

let isString = (x) => {
    return typeof(x) == 'string'? true : false;
   
    };

    console.log(isString('hello'));
    console.log(isString([1, 2, 4, 0]));


// ex 4
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

    // Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
    // Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
    // Hint : Use the array methods taught in class. Look at the lesson Array Methods.
    

let displayAll = () => {
    colors.forEach((item, index) => {console.log(`${index}# choice is ${item}`)} );
        
}
displayAll();

let isVioletHere = () =>{
    colors.some((value)=> {return (value === "Violet");}) ? console.log(`Yeah`):console.log(`No...`) ;
}

isVioletHere();


//ex 5

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.



let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

let displayAll2 = () => {
    colors.forEach((item, index) => {
        switch (true) {
            case (index === 0):
            console.log(`${index+1}${ordinal[1]} choice is ${item}`)
            break;
            case (index === 1):
            console.log(`${index+1}${ordinal[2]} choice is ${item}`)
            break;
            case (index === 2):
            console.log(`${index+1}${ordinal[3]} choice is ${item}`)
            break;
            default:
            console.log(`${index+1}${ordinal[0]} choice is ${item}`)
        
        }
 
});
}
displayAll2();

//ex 6 

let bankAmount = 5000;
let totalVat = 0;
let vat = (a) => a = a*.17;
let balance = [200, -100, 146, 167, -3300, 450];
let balanceSum =0;

   
let endOfmonth = () => {
    balance.forEach((i)=>{
        totalVat += vat(i);
        console.log(totalVat)
        balanceSum +=i;
        console.log(balanceSum);

    })
    return bankAmount - balanceSum - totalVat;
}

