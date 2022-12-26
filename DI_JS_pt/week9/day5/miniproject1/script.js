


function getRandom(num = 83){
    return Math.floor(Math.random()*83)
    };
let data = {};
let btn = document.querySelector("button");
let divCard = document.querySelector("div");
let i = document.querySelector("i");


const  getCharacter = async () => {
 
    id = getRandom(); 
    let url = `https://www.swapi.tech/api/people/${id}`
    const resp = await fetch(url);
    console.log(resp);
    divCard.innerHTML = " "
    data = await resp.json();
    console.log(data);
    let name = data.result.properties.name;
    let height = data.result.properties.height ;
    let gender = data.result.properties.gender ;
    let BY = data.result.properties.birth_year;
    getPlanet = async () => {
        const resp = await fetch(data.result.properties.homeworld);
        let planetData = await resp.json();
        return planetData.result.properties.name;
    }
    let home = await getPlanet();
    
    let h1 = document.createElement("h1");
    h1.textContent = name;
    let pHeight = document.createElement("p");
    pHeight.textContent = `Height: ${height}`;
    let pGender = document.createElement("p");
    pGender.textContent = `Gender: ${gender}`;
    let pBY = document.createElement("p");
    pBY.textContent = `Birth Year: ${BY}`;
    let pHome = document.createElement("p");
    pHome.textContent = `Home world: ${home}`;

    divCard.appendChild(h1);
    divCard.appendChild(pHeight);
    divCard.appendChild(pGender);
    divCard.appendChild(pBY);
    divCard.appendChild(pHome);    


}

btn.addEventListener('click', (e)=> {
    divCard.innerHTML='';
    let loader = document.createElement("i");
    loader.classList.add("fa-solid", "fa-sync", "fa-spin")
    divCard.appendChild(loader);
    setTimeout(
        getCharacter()
            .then ((res => {
            console.log('all good')
        }))
        .catch((e)=> { divCard.textContent = `oops, try again`})
    , 3000)
        
    })

    

