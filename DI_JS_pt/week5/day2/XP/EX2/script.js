// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

let form = document.forms[0];
console.log(form);


//same for name & id if you do it this way



let fname2 = document.querySelector("#fname").value;
console.log(fname2);

let lname2 = document.querySelector("#lname").value;
console.log(lname2);

let fname = form.elements.fname.value;
console.log(fname);

let lname = form.elements.lname.value;
console.log(lname);


let ul = document.querySelector("ul");


let li;
let li2;

form.addEventListener('submit', function(event) {
    event.preventDefault();   //so page won't reload on submit
    li =  document.createElement("li");
    li2 = document.createElement("li");
    let fname = form.elements.fname.value;
    let lname = form.elements.lname.value;
    if (fname.length < 1 || lname.length < 1) {
        alert('please, fill in all fields');
        return 
    }
    li.appendChild(document.createTextNode(fname));
    li2.appendChild(document.createTextNode(lname));
    ul.appendChild(li);
    ul.appendChild(li2);
    // fname = '';
    // lname = '';  didn't work for some reason
    form.elements.fname.value = '';
    form.elements.lname.value = '';

})