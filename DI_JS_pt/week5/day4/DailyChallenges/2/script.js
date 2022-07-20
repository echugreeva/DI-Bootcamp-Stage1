// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expression
let inputEl = document.querySelector("input");
let input = document.getElementById("input").value;
let letters = /^[A-Za-z]+$/;

// let check = (input) => {
//     if(!toCheck.match(letters)) {
//         e.preventDefault(); 
        
//     } else {true} 
// }
inputEl.addEventListener ("input", function (e) {
    if(!input.match(letters)) {
        e.preventDefault(); 
}
});

inputEl.addEventListener ("input", function (e) {
    if(!letters.test(input)) {
        e.preventDefault(); 
} else {
    console.log(`good input`)
}
});
