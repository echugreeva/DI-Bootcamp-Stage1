// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

let h1 = document.querySelector("h1");
console.log(h1);

let lastP = document.querySelector("article :last-child");

let h2 = document.querySelector("h2");


h2.addEventListener("click", function changeColor(event){

    event.target.style.backgroundColor = "red";
});

let h3 = document.querySelector("h3");


h3.addEventListener("click", function hide(event){

    event.target.style.display = "none";
});

let btn = document.createElement("button");
btn.appendChild(document.createTextNode("Click for bold"));

let body = document.querySelector("body");

body.appendChild(btn);


btn.onclick = function toBold () {
 body.style.fontWeight = "bold";
}

//bonus


h1.onmouseover = function ChangeSize () {
    let size1 = (Math.floor(Math.random() * 100)).toString() ; 
    let setSize = `${size1}px`;
    h1.style.fontSize= setSize;
}

h1.onmouseleave = function ChangeSize () {
    h1.style.fontSize= setSize;
}
//add class w3-animate-fading	

h2.onmouseover = function Fade () {
    h2.classList.add("w3-animate-fading");
}