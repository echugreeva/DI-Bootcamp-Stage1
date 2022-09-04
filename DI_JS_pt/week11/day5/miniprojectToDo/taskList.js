let body = document.querySelector('body');
let toDoAr = [];
for (let i=0; i< localStorage.length; i++){
    toDoAr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
}

toDoAr.sort((a, b) => parseFloat(a.start) - parseFloat(b.start)); //sorts task by start date

toDoAr.forEach((item)=>{
    let taskDiv = document.createElement("div");
    if(ifTaskLate(item.end)){
        taskDiv.classList.add("late");
    } else {
        taskDiv.classList.add("red");
    }
    let p = document.createElement("p");
    let descP = document.createElement("p");
    let start = document.createElement("p");
    let end = document.createElement("p");
    let btn = document.createElement("button");
    let editBtn = document.createElement("button");
    let dropDownBtn = document.createElement("button");
    p.textContent = item.name;
    start.textContent = item.start;
    end.textContent = timeToComplete(item.end);
    descP.textContent = item.desc;
    descP.style.display = 'none';
    btn.textContent = "X";
    editBtn.textContent = "Edit task";
    dropDownBtn.textContent = "More details";
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(p);
    taskDiv.appendChild(dropDownBtn);
    taskDiv.appendChild(descP);
    taskDiv.appendChild(start);
    taskDiv.appendChild(end);
    taskDiv.appendChild(btn); 
    btn.addEventListener('click', (e)=>{
        if(confirm("are you sure you want permanently delete this task?")){
            //remove object from array
            body.removeChild(taskDiv);
            
        }
    })
    editBtn.addEventListener('click', (e)=>{
        p.setAttribute("contentEditable","true");
        descP.setAttribute("contentEditable","true");
    })
    dropDownBtn.addEventListener('click', (e)=>{
        descP.style.display = 'block';
    })
    

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.addEventListener('change', (e)=>{
        // e.stopPropagation(); add that click on the checkbox doesn't open description //add dropdown icon to expand
        if(checkbox.checked === true) {
            console.log(`task is done`);
            taskDiv.classList.remove("red", "orange");
            taskDiv.classList.add("done", "green");
        }else{
            console.log(`you'll have to do it`);
            taskDiv.classList.remove("done", "green");
            taskDiv.classList.add("red");
        }
    })
    taskDiv.appendChild(checkbox);
    body.appendChild(taskDiv); 
    
})


function timeToComplete(end){
    endTime =  Date.parse(end);
    let result = Math.round((((endTime - Date.now()) / 1000)/60)/60/24) + " days";
    console.log(result);
    return result;
}

function ifTaskLate(end) {
    endTime = Date.parse(end);
    let result = Math.round(endTime - Date.now());
    if (result < 0) {
        return true
    } else{
        return false
    }

}

//add expandable, add editted information on task is saved into localStorage?