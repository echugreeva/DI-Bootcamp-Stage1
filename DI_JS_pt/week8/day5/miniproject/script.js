let form = document.forms[0];
let weatherDiv = document.querySelector("#weatherCard");
const apiKey = '6bc236fa8bd5e7e03f83fd8cea3eac74';
let units = `metric`;
let degree = `°C`;
let speed = `m/sec`;
document.querySelector("#Cel").checked = true;
let xhr = new XMLHttpRequest();
let searchHistory = [];
function timeFunction (timestamp)  {
    let date = new Date(timestamp*1000);
    let hours = date.getHours();
    let min = date.getMinutes();
    return (`${hours}:${min}`);
}
form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(`submitted`);
    let city = form.city.value.toUpperCase();
    console.log(city);
    if(document.querySelector("#Cel").checked === false) {
        units=`imperial`;
        degree = `°F`;
        speed = `miles/hour`;

    } else {
        units=`metric`;
        degree = `°C`;
        speed = `m/sec`;
    }
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&limit=1&units=${units}&appid=${apiKey}`;
    xhr.open("GET", url);
    xhr.send();
    xhr.responseType = 'json';
    xhr.onload = function() {
        if (xhr.status == 404 || xhr.status == 400) { 
            alert(`Submit real city`);
          } else if  (xhr.status != 200){
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
          }
           else { 
            console.log(xhr.response); 
            let result = xhr.response;
            searchHistory.push(result);
            let country = result.sys.country;
            let temp = result.main.temp;
            let iconId = result.weather[0].icon;
            let weather =result.weather[0].description;
            let humidity = result.main.humidity;
            let url2=`http://openweathermap.org/img/wn/${iconId}@2x.png`
            let windDeg = result.wind.deg;
            let windSpeed = result.wind.speed;
            let sunSet = timeFunction(result.sys.sunset);
            let sunRise = timeFunction(result.sys.sunrise);
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("w3-card-4", "w3-third", "w3-cell", "w3-mobile", "w3-margin", "w3-pink");
            cardDiv.style.position = "relative";
            cardDiv.style.margin = "0 auto";
            let icon = document.createElement("img");
            icon.setAttribute("src", url2);
            icon.classList.add("w3-padding-small");
            let h2 = document.createElement("h2");
            h2.textContent=`${city}, ${country}`;
            h2.classList.add("w3-padding-small");
            let p = document.createElement("p");
            p.textContent=`${temp} ${degree}, humidity: ${humidity}, ${weather}, sunrise at ${sunRise}, sunset at ${sunSet}, wind speed: ${windSpeed} ${speed}, wind degree ${windDeg}`;
            p.classList.add("w3-padding-small");
            cardDiv.appendChild(h2);
            cardDiv.appendChild(p);
            cardDiv.appendChild(icon);
            weatherDiv.appendChild(cardDiv);
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "X";
            removeBtn.classList.add("w3-button", "w3-indigo", "w3-circle");
            removeBtn.style.position = "absolute";
            removeBtn.style.top= 0;
            removeBtn.style.right= 0;
            cardDiv.appendChild(removeBtn);
            removeBtn.addEventListener("click", event => {
                event.preventDefault();
                weatherDiv.removeChild(cardDiv);
            })


        }
    }
    form.city.value='';
}
);

