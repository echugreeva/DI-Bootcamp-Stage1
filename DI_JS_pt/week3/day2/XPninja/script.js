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



