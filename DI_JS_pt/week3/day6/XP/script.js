// Ex 1
let people = ["Greg", "Mary", "Devon", "James"];

people.shift();

people[3] = "Jason";


people.push("Lena");

console.log(people.indexOf("Mary"));

let people1 = people.slice(2,-1);

console.log(people1);

people.indexOf("Foo"); 
// returns -1 cause there is no such value inthe array

let last = people.length-1;

console.log(last);

// index of the last element of an array is array length minus 1, cause index starts from 0


for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
 
for (let i = 0; i < people.length; i++) {
    if (people[i-1] == "Jason") { 
        break;
      }
    console.log(people[i]);
  }

//   Ex 2

let colors = ["blue", "pink", "black", "purple", "red"];


for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i+1} choice is ${colors[i]}`);
}

let suffix = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i+1}${suffix[i]} choice is ${colors[i]}`);
}

// Ex 3 
let num1 = '';

do {
num1=prompt(`give me a number`);
console.log(num1);
}


while(Number(num1) < 10);
    


// Ex 4

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(`First floor has: ${building.numberOfAptByFloor.firstFloor} apartments and third floor has ${building.numberOfAptByFloor.thirdFloor}`);
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);
let rentThreshold = building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1];
console.log(rentThreshold);
console.log(building.numberOfRoomsAndRent.dan[1]);
if (rentThreshold > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200;   
}
console.log(building.numberOfRoomsAndRent.dan[1]);


// Ex 5

let family = {
    mom: "Jena",
    dad: "Jake",
    son: "Justin",
    daughter: "Jina",
    cat: "Dog"
}

for (keys in family) {
    console.log(keys);
}

for (value in family) {
    console.log(family[value]);
}
// easier way
console.log(Object.keys(family));
console.log(Object.values(family));

// Ex 6 

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }


  for (let keys in details) {
      console.log(`${keys} ${details[keys]}`);
  }

  // Ex 7 

  let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

    names.sort();
    console.log(names);

  let secretName = [];

  for (let i in names) {
      secretName.push((names[i][0]));
      
  }

  console.log(secretName.join(''));