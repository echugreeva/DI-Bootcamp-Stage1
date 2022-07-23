// ex 1

let sentence = ["my","favorite","color","is","blue"];

console.log(sentence.join(" "));


//ex 2

let str1="big";
let str2="mistake";

str2New = str1.slice(0,2);
str1New =str2.slice(0,2);

console.log(`${str2New} and ${str1}`);

str1 = str1.replace("bi",str1New );

console.log(str1);

str2 = str2.replace("mi",str2New);

var str3 = str1.concat(" ",str2);

console.log(str3);


//ex 3

let num1=prompt("give you first number");
let num2=prompt("give you secind number");

num1=Number(num1);
num2=Number(num2);

alert(num1+num2);
