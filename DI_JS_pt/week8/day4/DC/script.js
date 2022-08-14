let btn = document.querySelector("button");
let root = document.querySelector(".root");
let body= document.querySelector("body");
const apiKey = `hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
let xhr = new XMLHttpRequest();
function getRandom(num = 50){
  return Math.floor(Math.random()*50)
};
let deleteAllBtn = document.createElement("button");
deleteAllBtn.textContent = "delete All";
body.appendChild(deleteAllBtn);
          deleteAllBtn.addEventListener('click', (e)=>{
            root.innerHTML='';
          })
      
btn.addEventListener("click", (e) => {
e.preventDefault();
getGif();

})

function getGif()
 {  let gif;
    const text = document.getElementById('gifkeyword').value
    const rating = document.getElementById('rating').value
    let data = `q=${text}&rating=${rating}`;
    let url = `https://api.giphy.com/v1/gifs/search?${data}&limit=1&api_key=${apiKey}&offset=${getRandom()}`; //add random
     // move outside the function 
    xhr.open("GET", url);
    xhr.send();
    xhr.responseType = 'json';
    xhr.onload = function() {
        if (xhr.status != 200) { 
          alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else { 
          console.log(xhr.response); 
          gif = xhr.response;
          console.log(gif.data[0].images.original.url);
          let url = gif.data[0].images.original.url;
          let div = document.createElement("div");
          let img = document.createElement("img");
          img.setAttribute("src", url);
          let deleteBtn = document.createElement("button");
          deleteBtn.textContent = "delete"; 
          div.appendChild(img);
          div.appendChild(deleteBtn);
          root.appendChild(div);
          deleteBtn.addEventListener('click', (e)=>{
            div.innerHTML='';
          })
          
          
      };

        

 }
}
 



