//Ex 1, if correct I add V

5 >= 1
//prediction: true
//console: V
0 === 1
//prediction: false
//console:V
4 <= 1
//prediction: false
//console: V
1 != 1 
//prediction:false
//console:V
"A" > "B"
//prediction: false
//console:V
"B" < "C"
//prediction: true
//console: V
"a" > "A"
//prediction: true
//console: V
"b" < "A" 
//prediction:false
//console:V
true === false
//prediction:false
//console:V
true != true
//prediction:false
//console:V

//Ex 2


let numString=prompt("provide 2 numbers, separated by comma:");

let array = numString.split(",");

console.log(Number(array[0])+Number(array[1]));



// Ex 3

let sentence = prompt(`Type a sentence containing word "Nemo"`);

let nemoPos = sentence.indexOf("Nemo");

if(nemoPos >=0) {
    console.log(`I found Nemo at ${nemoPos}`);
} else {
    console.log(`Can't find Nemo`);
}
    

let sentence1 = prompt(`Type a sentence containing word "Nemo"`);

if(sentence.indexOf("Nemo") >=0) {
    console.log(`I found Nemo at ${sentence1.indexOf("Nemo")}`);
} else {
    console.log(`Can't find Nemo`);
}
    

// Ex 4

let num1 = Number(prompt(`give me a number:`));

switch (true) {
    case (num1<2):
    console.log(`boom`)
    break;
    case (num1 >2 && num1%5 === 0 && num1%2 === 0 ):
    console.log(`BOOM !`)
    break;
    case (num1 >2 && num1%2 === 0):
    console.log(`boom !`)
    break;
    case (num1 >2 && num1%5 === 0):
    console.log(`BOOM`)
    case (num1>2):
    console.log((`o`).repeat(num1))
    break;
}

