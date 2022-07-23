// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
let radius;
const pi = 3.14159265359;
let form = document.forms[0];

let volumeOfSpeareByRadius = (radius) => {
    return (4/3)*pi*(Math.pow(radius, 3))

}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    radius = form.elements.radius.value;
    form.elements.volume.value = volumeOfSpeareByRadius(radius);
})