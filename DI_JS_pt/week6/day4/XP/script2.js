// Create multiple squares/boxes with letters inside. There should be 26 squares/boxes for all the letters (A to Z) next to each other.
// Make all the squares draggable.
// You should be able to drag and drop the letters depending on their coordinates x and y.
body = document.querySelector("body");
body.style.display="relative";

let letters = ['a','b','c','d','e'];
body.addEventListener("onload", createDiv());
function createDiv () {
    letters.forEach((e)=> {
        div = document.createElement("div");
        div.textContent = e;
        div.classList.add("div");
        div.setAttribute("draggable",'true');
        body.appendChild(div);
        div.addEventListener('mouseup', newPlace(e))
        
    
    })
}

function newPlace (e) {
    console.log(e)
}