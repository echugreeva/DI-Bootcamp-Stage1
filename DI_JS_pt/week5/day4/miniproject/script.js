let color;
let mousedown = false;

let body = document.querySelector("body");
let colorsPicks = document.querySelectorAll(".colorPick");
let fillColors = document.querySelectorAll(".toColor");
let resetColor = document.querySelector("button");
let colorSections = document.querySelector(".colorSections");

resetColor.addEventListener("click", function() {
  for (let i=0; i<fillColors.length;          i++)
    {
        fillColors[i].style.backgroundColor = "white";
    }
});

colorSections.addEventListener("mousedown", function(){
    mousedown = true;
})

colorSections.addEventListener("mouseup", function(){
    mousedown = false;
})


for (let i=0; i<colorsPicks.length;i++){
    colorsPicks[i].addEventListener("click", function(event){
        color = window.getComputedStyle(event.target).backgroundColor;
    });
}

for (let i=0; i<fillColors.length; i++){
    fillColors[i].addEventListener("mousedown", function(event){
        if (color != null) event.target.style.backgroundColor = color;
    });

}

for (let i=0; i<fillColors.length; i++){
    fillColors[i].addEventListener("mouseover", function(event){
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}
