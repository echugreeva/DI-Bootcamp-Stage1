//ex 1
[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  });

  //output [2,4,6]

  //ex 2
  [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
//   output [[1,2],[0,1],[2,3]]

//ex 3 

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

// i is from 0 to 5

//ex 4

// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.
// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.
// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const array = [[1],[2],[3],[[[4]]],[[[5]]]];

let flat1Arr = array.flat();
console.log(flat1Arr);

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
let just3 = trapped.flat(Infinity);
console.log(just3);

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// let newGreetings = greeting.map((element)=>{element.join(" ")});

let newGreetings = [];
for (let i=0; i< greeting.length; i++){
    let a = greeting[i].join(' ');
    newGreetings.push(a);

}
console.log(newGreetings);

let string = greeting.flat().join(" ");

