// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expression
let inputEl = document.querySelector("input");


inputEl.addEventListener("keydown", function (event) {
    var charCode = event.keyCode;
    // console.log(charCode);
    if (!((charCode > 64) && (charCode < 91))){
   
        event.preventDefault()
    }
    
    }

);