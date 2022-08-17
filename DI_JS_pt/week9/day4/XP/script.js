// EX 1 

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(result => console.log(result));



 const f = async () => {
   const response = await fetch("https://dog.ceo/api/breeds/image/random");
   let data = await response.json();
   console.log(data);
 }

 f()
//    Ex 2

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//prediction
// calling  then in 2 sec
// resolved




