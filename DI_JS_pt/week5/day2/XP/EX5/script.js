
let body = document.querySelector("body");

let div = document.querySelector("div");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let img = document.querySelector("img");
let btn = document.querySelector("button");

// div.style.width = "200px";
// div.style.height = "200px";
// div.style.backgroundColor = "royalblue";
// body.style.position ="relative";

btn.style.position = "absolute";
btn.style.top ='50%';
btn.style.left="50%";


btn.addEventListener("click", function changeColor(event){

    event.target.style.backgroundColor = "red";
});

btn.addEventListener("dblclick", function Fade () {
    img.classList.add("w3-animate-fading");

});

btn.addEventListener("mouseover", function Left (event) {
    event.target.classList.add("w3-animate-left");

})

btn.addEventListener("mouseleave", function ChangeSize (event) {
    let size1 = (Math.floor(Math.random() * 100)).toString() ; 
    let setSize = `${size1}px`; 
    event.target.style.fontSize= setSize;
} )



//ignore

// h1.addEventListener("click", function hide(event){

//     event.target.style.display = "none";
// });

// img.addEventListener("mouseover", function Fade (event) {
//     event.target.classList.add("w3-animate-fading");

// })



// p.addEventListener("mouseover", function ChangeSize () {
//     let size1 = (Math.floor(Math.random() * 100)).toString() ; 
//     let setSize = `${size1}px`; 
//     p.style.fontSize= setSize;
// } )

// p.addEventListener("mouseleave", function ChangeSize () {
//     let size1 = (Math.floor(Math.random() * 100)).toString() ; 
//     let setSize = `${size1}px`; 
//     p.style.fontSize= setSize;
// } )