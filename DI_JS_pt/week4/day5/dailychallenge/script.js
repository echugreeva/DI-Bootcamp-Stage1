// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planets = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn', 'Uranus', 'Neptune'];

let colorClass = ['grey', 'white', 'blue', 'red', 'brown', 'yellow', 'lightblue', 'royalblue'];


for (let i = 0; i < planets.length; i++) {
    let div = document.createElement("div");
    div.classList.add("planet", colorClass[i]);
    document.querySelector("section").appendChild(div);

}

//solution bonus

let planets2 = [{name: 'Mercury', moons: 0},

{name: 'Venus', moons: 0},
{name: 'Earth', moons: 1},
{name: 'Mars', moons: 2},
{name: 'Jupiter', moons: 53},
{name: 'Saturn', moons: 53},
{name: 'Uranus', moons: 27},
{name: 'Neptune', moons: 14} ];


for (let i = 0; i < planets2.length; i++) {
    let div = document.createElement("div");
    div.classList.add("planet", colorClass[i]);
    document.querySelector("section").appendChild(div);

    let amountOfMoons = planets2[i]['moons'];
        for (let i = 0 ; i <= amountOfMoons; i++) {
            let div2 = document.createElement("div");
            div2.classList.add("moon");
            document.querySelector("section").appendChild(div2);
        }

}


