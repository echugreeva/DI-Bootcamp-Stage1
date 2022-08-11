let btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
e.preventDefault();
getGifs();

})

// EX 1 function
function getGifs()
 {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    xhr.send();
    xhr.responseType = 'json';
    xhr.onload = function() {
        if (xhr.status != 200) { 
          alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else { 
          console.log(xhr.response); 
        }
      };
        

 }
 

//  Ex 2


function get10SunGifs()
 {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    xhr.send();
    xhr.responseType = 'json';
    xhr.onload = function() {
        if (xhr.status != 200) { 
          alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } else { 
          console.log(xhr.response); 
        }
      };
        

 }
    
