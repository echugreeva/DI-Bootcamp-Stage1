// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.


// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.


/* <form id="libform">
<label for="noun">Noun:</label><input type="text" id="noun"><br>
<label for="adjective">Adjective:</label><input type="text" id="adjective"><br>
<label for="person">Someone's Name:</label><input type="text" id="person"><br>
<label for="verb">Verb:</label><input type="text" id="verb"><br>
<label for="place">A place:</label><input type="text" id="place"><br>
<button id="lib-button">Lib it!</button>
</form>

<p>Generated story: 
<span id="story"></span>
</p> */
let form = document.forms[0];
let noun ;
let adjective;
let person ;
let verb ;
let place ;
let button = document.querySelector("#lib-button");
let story = document.querySelector("#story");
let words =[];


let string;

let createStory =() => {
    noun = document.getElementById("noun").value;
    adjective = document.getElementById("adjective").value;
    person = document.getElementById("person").value;
    verb = document.getElementById("verb").value;
    place = document.getElementById("place").value;
    words =[noun, adjective, person, verb, place];
    for (i=0; i< words.length; i++){
        if (words[i].length<1){alert(`fill all fields`)}
    }
    string = `One morning a ${adjective} ${noun} named ${person} ${verb} in ${place}`;
    story.appendChild(document.createTextNode(string));
   
}


form.addEventListener('submit', function (event){
    event.preventDefault();
    createStory();
})
