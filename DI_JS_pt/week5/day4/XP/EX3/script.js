// Copy the code above, to a structured HTML file.
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.


let box = document.querySelector("#box");
box.setAttribute('draggable','true');


box.addEventListener("dragstart", dragStart);

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}


let targetBox = document.querySelector("#target");

targetBox.addEventListener("dragover", dragOver)
targetBox.addEventListener("drop", drop)
targetBox.addEventListener("dragenter", dragEnter)
targetBox.addEventListener("dragleave", dragLeave)


function dragOver(event){
    event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  let dataSquare = event.dataTransfer.getData("text");
  let box = document.getElementById(dataSquare)
  event.target.appendChild(box);
}

function dragEnter(event){
  // event.target.style.backgroundColor = "green"
   event.target.classList.add('over');
}

function dragLeave(event){
  // event.target.style.backgroundColor = "lightblue"
  event.target.classList.remove('over');
}
