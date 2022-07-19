// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.



//part 1
let hello = () => {
    alert('Hello World!');
}

let helloWithDelay = () =>{
    setTimeout(hello, 2000);
}

helloWithDelay();

//part 2

let container = document.querySelector("#container");
let btn = document.querySelector("button")

let num = 1;
let addNewP = () => {
    let p = document.createElement("p");
    p.textContent="Hello World!"
    container.appendChild(p);
    num++;
    console.log(num);
    if (num > 5){
        clearInterval(myInterval);

}
}

setTimeout(addNewP, 2000);



var myInterval;


myInterval = setInterval(addNewP,2000);

    
btn.addEventListener("click", function() {
        clearInterval(myInterval)
    });