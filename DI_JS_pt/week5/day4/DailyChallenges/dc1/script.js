// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

// BONUS I (not mandatory):
// Change the variable listTasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.

listTasks =[];
let form = document.forms[0];
let ul = document.querySelector("ul");
let task; 
let newLi;
let xBtn;
let checkbox;
let CBLabel;
let button = document.querySelector("#submit");


let addTask = () => {
    newLi = document.createElement("li");
    listTasks.push(task);
    task = form.elements.task.value;
    if (task.length > 0) {
        xBtn = document.createElement('i');
        xBtn.classList.add("fa", "fa-thin", "fa-xmark");
        checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox'); 
        checkbox.setAttribute('name', 'task')
        CBLabel = document.createElement('label');
        CBLabel.setAttribute("for","task");
        CBLabel.appendChild(document.createTextNode(task));
        newLi.appendChild(xBtn);
        newLi.appendChild(checkbox);
        newLi.appendChild(CBLabel);
        //newLi.appendChild(document.createTextNode(task));
        ul.appendChild(newLi);
        form.elements.task.value="";
    } else { alert(`input task`)}
    

}

//form submit didn't work

// form.addEventListener("sumbit", function (){
//     //event.preventDefault();
//     addTask()
// });


button.addEventListener("click", function (event){
    event.preventDefault();
    console.log (`click btn`);
    addTask();
});


// let task ={
//     text: null,
//     id:0,
//     done: false
// };

//task["text"] = form.element.input.value;
//task['id']=id+1