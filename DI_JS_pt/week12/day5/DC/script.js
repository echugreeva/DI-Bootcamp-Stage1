
let body = document.querySelector("body");
let form = document.forms[0];
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     window.open('/formdata', '_blank');

// on submit fetch with post, response is a message in json-> create div with this message

// })

// /reg vars


// login vars


//register fetch
const register =(event)=>{
  event.preventDefault();
  let fname = form.fname.value;
  let lname = form.lname.value;
  let uname = form.uname.value;
  let password = form.password.value;
  let email = form.email.value;

  let user = {
    fname: fname,
    lname:lname,
    uname: uname,
    password: password,
    email:email
  }

  
  fetch ('./register', {
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  
    let p = document.createElement("p");
    p.textContent= `${data}`
    document.body.appendChild(p);
  
  })
  .catch(e => console.log(e))
}

const login = (event) =>{
  event.preventDefault();
  let userName = form.userName.value;
  let psw = form.psw.value;

  

  let loginData = {
  psw: psw,
  userName, userName
};

console.log(loginData)
  
  console.log(loginData);
  
  fetch ('./login', {
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  
    let p = document.createElement("p");
    p.textContent= `${data}`;
    document.body.appendChild(p);
  
  })
  .catch(e => console.log(e))
}