//excercise 1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.splice(0,1);

console.log(fruits);

fruits.sort();

fruits.push("Kiwi");

fruits.shift(0);

console.log(fruits);

fruits.reverse();

console.log(fruits);


//excercise 2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0]);