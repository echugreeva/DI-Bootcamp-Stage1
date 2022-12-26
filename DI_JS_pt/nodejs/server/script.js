fetch('http://localhost:5500/api/products')
.then((response) => response.json())
  .then((data) => {console.log(data)
    let body = document.querySelector("body");
    let div = document.createElement("div");
    div.textContent = data;
    body.appendChild(div);
  
  
  });;

