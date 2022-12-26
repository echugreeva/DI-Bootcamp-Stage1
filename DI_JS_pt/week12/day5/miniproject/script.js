let btn = document.querySelector("button");
btn.addEventListener("click",(e) =>{
    sendData();
    // window.open('./shopping', '_blank')
});

function sendData() {
    let item = document.getElementById('item').value;
    let amount = document.getElementById('amount').value;
    
  
    let listItem = {
      item: item,
      amount: amount,
    }
    // console.log(listItem);
  
    fetch('/',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(listItem)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    
      let p = document.createElement("p");
      p.textContent= `${data[data.length-1].item}: ${data[data.length-1].amount}`
      document.getElementById('root').appendChild(p);

    })
    .catch(e => console.log(e))
  }

  