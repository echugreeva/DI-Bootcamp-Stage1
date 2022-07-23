
//solution 1
let phrase2 = prompt(`Enter 5 words, separated by comma:`);
let myArray = phrase2.split(",");


let maxLength2 = myArray[0].length;
for (i=0; i < myArray.length; i++) {
    if(myArray[i].length > maxLength2){
        maxLength2 = myArray[i].length; 
    }
        // console.log(maxLength2);
}

console.log ("*".repeat(maxLength2 + 4));
    let emptySpace2;

    for (let i = 0; i < myArray.length; i++) {

        emptySpace2 = maxLength2 - myArray[i].length;
        // console.log(`emptyspace ${emptySpace}`);
        if (emptySpace2 >= 0) {
            console.log(`* ${myArray[i]} ${" ".repeat(emptySpace2)} *`);
        } else {
            console.log(`* ${myArray[i]} *`);
        }
       
    
    }
    console.log ("*".repeat(maxLength2 + 4));


//Solution 2 

let phrase =[];
let word;
for (i=0; i<5; i++) {
    word = prompt(`Say a word:`);
    phrase.push(word);
}

// determine amount of * by finding the longest word
let maxLength = phrase[0].length


// phrase.forEach(element) {
//     if(element.length > maxLength){
//     maxLength = element.length; }
//     console.log(maxLength);
    
// }

for (i=0; i < phrase.length; i++) {
    if(phrase[i].length > maxLength){
        maxLength = phrase[i].length; 
    }
        console.log(maxLength);
}

    // console log maxlength *, * each array item *, maxlength *

    // everyline length = maxLength - element.length 

    console.log ("*".repeat(maxLength + 4));
    let emptySpace;
    // phrase.forEach(element =>
    //     emptySpace = maxLength - element.length - 2
    //     console.log(`* ${element}${" ".repeat(emptySpace)} *`));

    for (let i = 0; i < phrase.length; i++) {

        emptySpace = maxLength - phrase[i].length;
        // console.log(`emptyspace ${emptySpace}`);
        if (emptySpace >= 0) {
            console.log(`* ${phrase[i]} ${" ".repeat(emptySpace)} *`);
        } else {
            console.log(`* ${phrase[i]} *`);
        }
       
    
    }
    console.log ("*".repeat(maxLength + 4));


