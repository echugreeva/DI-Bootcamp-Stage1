// EX 1
// const createDiv = (x) => {
// let body = document.querySelector("body");
// let div = document.createElement("div");
// div.textContent = x;
// body.appendChild(div);}

// fetch('http://localhost:3000/')
// .then((response) => response.json())
//   .then((data) => {console.log(data)
//     createDiv(data);
  
  
//   });;


//   EX 2 
let body = document.querySelector("body");
let btn = document.querySelector("button");
btn.addEventListener('click', (e)=>{
    alert(`Hello from Javascript`);
})