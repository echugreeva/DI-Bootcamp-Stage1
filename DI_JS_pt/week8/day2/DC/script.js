let form = document.forms[0];

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let name = form.name.value;
    let lastName = form.lastName.value;
    let obj = {name: name, lastName: lastName};
    let objJson = JSON.stringify(obj);
    let output = form.result;
    output.value = objJson;
   
    // or console.log(objJson);

})


// another option with serevr 

let form2 = document.forms[1];
let hidden = form2.hidden.value;
form2.addEventListener('submit', (event)=>{
    event.preventDefault();
    let name = form2.name.value;
    let lastName = form2.lastName.value;
    let obj = {name: name, lastName: lastName};
    let objJson = JSON.stringify(obj);

    form2.submit();
   
})
