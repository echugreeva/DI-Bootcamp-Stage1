

// Add the code above, to your HTML file V

// Add a “light blue” background color and some padding to the <div>.V

// Do not display the <li> that contains the text node “John”.

// Add a border to the <li> that contains the text node “Pete”.

// Change the font size of the whole body.V

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div). V

let div = document.querySelector("div");

div.style.backgroundColor = "lightblue";

let body = document.querySelector("body");

let AllLi = document.querySelectorAll("li");


for (let i = 0; i<AllLi.length; i++) {
    if (AllLi[i].innerText === "John") {
        AllLi[i].style.display = "none";
    } else if (AllLi[i].innerText === "Pete"){
        AllLi[i].style.border = "black solid 1px";
    } else {}

}
// document.querySelector("li").style.display = "none";

// document.querySelector("ul :nth-Child(2)").style.border = "black solid 1px";

body.style.fontSize = "14px";

let bgColor = div.style.backgroundColor;
console.log(bgColor)

if(bgColor = "lightblue") {
    alert(`hello ${document.querySelector("li").innerText} & ${(document.querySelectorAll("li")[1].innerText)}` );
};