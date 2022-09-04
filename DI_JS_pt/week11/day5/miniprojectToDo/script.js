
let form = document.forms[0];
let body = document.querySelector("body");
let count = 1;
let task;
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    
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
item = `item${count}`;
localStorage.setItem(item, taskString);
console.log(localStorage);
count ++;
window.open('./taskList.html', '_blank');
})

