
let form = document.forms[0];
let body = document.querySelector("body");
let count = 1;
let toDoAr = [];
let task;
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    count ++;
let taskName = form.name.value;
let taskDesc = form.desc.value;
let startDate = form.startDate.value;
let endDate = form.endDate.value;
 task = {
    name: taskName,
    desc: taskDesc,
    start:startDate,
    end:endDate,
    isDone: false

};
let taskString = JSON.stringify(task);
// let key = count.toString();
item = `item${count}`;
localStorage.setItem(item, taskString);
console.log(localStorage);
toDoAr.push(JSON.parse(localStorage.getItem(item)));
window.open('./taskList.html', '_blank');
toDoAr.forEach((item)=>{
    let taskDiv = document.createElement("div");
    let p = document.createElement("p");
    let descP = document.createElement("p");
    let start = document.createElement("p");
    let end = document.createElement("p");
    p.textContent = item.name;
    start.textContent = item.start;
    end.textContent = timeToComplete(item.start, item.end);
    descP.textContent = item.name;
    descP.style.display = 'hidden';
    taskDiv.appendChild(p);
    taskDiv.appendChild(descP);
    taskDiv.appendChild(start);
    taskDiv.appendChild(end);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    taskDiv.appendChild(checkbox); //add function on check change status of task to complete and apply class "done" that will change text to strike through
    body.appendChild(taskDiv);    
    //adding description drop down
    taskDiv.addEventListener('click', (e)=>{
        descP.style.display = 'block';
    })   
    
})

}
)

function timeToComplete(start, end){
    startTime = Date.parse(start); //take string from obj toDoAr[2].end 
    endTime =  Date.parse(end);

    result = (((Math.abs( start - end ) / 1000)/60)/60/24) + "day";
    console.log(result)
}



//add 

function timeToComplete(end){
    // startTime = Date.parse(start); //take string from obj toDoAr[2].end /// change date to today to 
    endTime =  Date.parse(end);

    // result = (((Math.abs(startTime - endTime) / 1000)/60)/60/24) + "day";
    result =(((Math.abs(Date.now() - endTime) / 1000)/60)/60/24) + "day";
    console.log(result);
    return result;
}

// result on a new page
//add button & popup to close (alert window?)
// filter by start date
// color code for status
//logic for status change
//edit functionality