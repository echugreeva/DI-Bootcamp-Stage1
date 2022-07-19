let color = null;
let mousedown = false;

let body = document.getElementsByTagName("body")[0];
let colorsPicks = document.querySelectorAll(".colorPick");
let fillColors = document.querySelectorAll(".toColor");
let resetColor = document.getElementsByTagName("button")[0];

resetColor.addEventListener("click", function(){
    for (fillColor of fillColors){
        fillColor.style.backgroundColor = "white";
    }
});

body.addEventListener("mousedown", function(){
    mousedown = true;
})

body.addEventListener("mouseup", function(){
    mousedown = false;
})


for (colorsPick of colorsPicks){
    colorsPick.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    });
}

for (fillColor of fillColors){
    fillColor.addEventListener("mousedown", function(event){
        if (color != null) event.target.style.backgroundColor = color;
    });
    fillColor.addEventListener("mouseover", function(event){
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}
