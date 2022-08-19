//ex 1 

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});


function allPr  (arr) {
    return Promise.all(arr)
    .then(results => {
        
            console.log(results)
        
    })
    .catch(e => {console.log(e)})
}



 allPr([promise1, promise2, promise3]);


 //ex 2


 let form = document.forms[0];
 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let city1lat = form.city1lat.value;
    let city1lon = form.city1lon.value;
    let city2lat = form.city2lat.value;
    let city2lon = form.city2lon.value;
    let outputs = document.querySelectorAll("output");
    
    let url1 = `https://api.sunrise-sunset.org/json?lat=${city1lat}&lng=${city1lon}`;
    let url2 = `https://api.sunrise-sunset.org/json?lat=${city2lat}&lng=${city2lon}`;
    console.log(city1lat, city1lon,  city2lat, city2lon, url1, url2)
    
    Promise.all([fetch(url1), fetch(url2)])
    .then(results => { 
        results.forEach((item, i) =>{
            item.json()
            .then(data => {
                console.log(data.results.sunrise);
               
                outputs[i].value = `Sunrize time: ${data.results.sunrise}`;

        
            })
        })
        
            })
    .catch(e => {console.log(e)})
     
})


