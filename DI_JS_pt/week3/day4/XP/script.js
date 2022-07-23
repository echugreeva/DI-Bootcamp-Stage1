// ex 1

let x = 4;
let y = 3;

if (x>y) {
    console.log(`x is the biggest number`);
} else {
    console.log(`try again`);
}

// ex 2

let newDog ="Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog == "Chihuahua") {
    console.log("I love Chihuahuas, it\’s my favorite dog breed");
} else {
    console.log("I dont care, I prefer cats");
}

// ex 3

let a = Number(prompt(`Give me a number:`));

if ( a%2 === 0 ) {
    console.log(`${a} is an even number`);
} 
else {
    console.log(`${a} is an odd number`);
}


//ex 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

switch (users.length){
    case 0:
        console.log(`No one is online`)
    break;
    case 1:
        console.log(`${users[0]} is online`)
    break;  
    case 2:
        console.log(`${users[0]} and ${users[1]} are online`)
    break;    
    default:
        console.log (`${users[0]}, ${users[1]} and ${users.length-2} more are online`)

}