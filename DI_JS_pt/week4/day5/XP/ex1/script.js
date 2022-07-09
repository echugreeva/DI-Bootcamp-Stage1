
// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// Delete the <li> that contains the text node “Sarah”.  ////not working

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.


let div = document.querySelector("div");
console.log(div);


document.querySelector("ul :nth-child(2)").textContent = "Richard";


let toReplace = document.querySelectorAll("ul :first-child");
toReplace.forEach(element => element.textContent = "Lena");
let indexToRemove;
let allLi = document.querySelectorAll("li");
 for (let i=0;i< allLi.length; i++) {
    
    if(allLi[i].innerHTML == "Sarah") {
        indexToRemove = i;
        console.log (indexToRemove);
        
    }
}

allLi[indexToRemove].remove();



    let uls = document.querySelectorAll("ul");
    uls.forEach(element => element.classList.add("student_list"));

    let ul1 = document.querySelector("ul");
    ul1.classList.add("university","attendance");