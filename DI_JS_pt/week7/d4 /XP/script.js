//Ex 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//prediction: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)`


//Ex 2 
function displayStudentInfo(objUser){
    //destructuring
    const {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'


//Ex3 

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const users = { user1: 18273, user2: 92833, user3: 90315 }
const arr = Object.entries(users);
console.log(arr);



let arr2 = arr.map((x) => [x,x[1]*2] );
console.log(arr2);    


//Ex4 

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);

  //object

  //Ex 5
  class Dog {
    constructor(name) {
      this.name = name;
    }
  };

//   Analyze the options below. Which constructor will successfully extend the Dog class?   option 2
//  // 1
//  class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };
  
  
    // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
  
  
//     // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };
  
  
    // 4
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };


//Ex6 

//p1
// [2] === [2]  false
// {} === {}  false

//p2
const object1 = { number: 5 }; 

//number is 5
const object2 = object1; 
//number is 5
const object3 = object2; 
//number is 5
const object4 = { number: 5};
//number is 5

object1.number = 4;
console.log(object2.number)
//number is 4
console.log(object3.number)
//number is 4
console.log(object4.number)
//number is 5

// obj2&3 refer to obj1 and when changes occured in obj 1 they also affected obj2 & 3, but obj4 is a separate obj, so num value wasn't changed


//p3
// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white


class Animal { 
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
    
  }

  class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color)
    }
    sound(animalSound) {
        console.log(`My name is ${this.name}, I'm a ${this.type}, colored ${this.color}, and I ${animalSound}`); 

    }
    

  }

  let farmerCow = new Mamal('Moomy', 'cow', 'ginger').sound('Moo');
  console.log(farmerCow);