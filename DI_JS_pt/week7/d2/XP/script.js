//ex 1

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//forecast output: ['bread', "carrot", "potato", 'chicken', "apple", "orange"];

// ------2------
const country = "USA";
console.log([...country]);
//forecast output: ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//forecast[undefined, undefined]

//Ex 2
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//              Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]


// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.


// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

let welcomeStudents = users.map((item)=> {
    return "Hello " + item.firstName
})

console.log(welcomeStudents);

let onlyFullStack = users.filter((item)=>{
    if (item.role === 'Full Stack Resident') {
        return item;
    }
    
})
console.log(onlyFullStack);

let LastNameAr = users.filter((item)=>{
    if (item.role === 'Full Stack Resident') {
        return item;
    }
    
}).map(item=>item.lastName);

console.log(LastNameAr);


//ex 3
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let string = epic.reduce((total, cur) => {return total +" " + cur});
console.log(string);

//ex 4
let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


//    Using the filter() method, create a new array, containing the students that passed the course.
 //    Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

 let passed = students.filter((item)=>{
     if (item.isPassed === true) {
         return item
     }
 }).forEach(e => console.log(`Good job ${e.name}, you passed the course in ${e.course}`))

 console.log(passed);