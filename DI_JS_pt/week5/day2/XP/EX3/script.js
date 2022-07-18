// Declare a global variable named allBoldItems.

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called return_normal() that changes the color of all the bold text back to black.

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the p aragraph). Look at this example

let allBoldItems;
let body = document.querySelector("body");
let strong = document.querySelectorAll("strong");
let wordsAr = [];
let p = document.querySelector("p");


let getBold_items =() => {

    let p = document.createElement("p");
   // strong.forEach((e) => { wordsAr[e].push(strong.innerHTML)});
   for (let i = 0; i < strong.length; i ++){
    wordsAr.push(strong[i].innerHTML);
   }
    //console.log(wordsAr);
    p.appendChild(document.createTextNode(wordsAr.join(" ")));
    allBoldItems = p;

    body.appendChild(allBoldItems);

    
    
}

let highlight = () => {
    for (let i = 0; i < strong.length; i ++ ) {
        strong[i].style.color = "blue";
    }
}

let return_normal = () => {
    for (let i = 0; i < strong.length; i ++ ) {
        strong[i].style.color = "black";
    }
}

getBold_items();


p.addEventListener("mouseover",highlight);
p.addEventListener("mouseout",return_normal);