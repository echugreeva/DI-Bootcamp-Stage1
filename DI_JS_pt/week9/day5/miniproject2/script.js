// fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
//         .then((resp) => resp.json()) //return a promise
//         .then((resp) => 
//               console.log(`The hour of the sunrise in Tel Aviv is:
//               ${resp.results.sunrise}`))
//         .catch(function (error) {
//             console.log(`We got the error ${error}`)
//         });


function getRandom(num = 20){
    return Math.floor(Math.random()*20)
    };
let idHistory = []    
let data = {};
let pokId;
let btn = document.querySelector(".round");
let btnPrev = document.querySelector(".left");
let btnNext = document.querySelector(".right");
let divCard = document.querySelector("#card");
let counter = idHistory.length;

const  getPokemon = async () => {
    divCard.innerHTML='';
    pokId = getRandom(); 
    idHistory.push(pokId);
    let url = `https://pokeapi.co/api/v2/pokemon/${pokId}`
    const resp = await fetch(url);
    console.log(resp);
    data = await resp.json();
    console.log(data);
    let name = data.name;
    let imgUrl = data.sprites.other.home.front_default;
    let type = data.types[0].type.name;
    let height = data.height;
    let weight = data.weight;
    let img = document.createElement("img");
    img.setAttribute("src", imgUrl);
    divCard.appendChild(img);
    let p = document.createElement("p");
    p.textContent = `ID: ${pokId}, name:${name}, type ${type}, height ${height}, weight ${weight} `
    divCard.appendChild(p);


}

const getPrevPokemon = async () => {
    divCard.innerHTML='';
    if (counter < 1) {
        getPokemon();
    } else {
        pokId = idHistory[counter - 1];
        counter = counter - 1;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokId}`
        const resp = await fetch(url);
        console.log(resp);
        data = await resp.json();
        console.log(data);
        let name = data.name;
        let imgUrl = data.sprites.other.home.front_default;
        let type = data.types[0].type.name;
        let height = data.height;
        let weight = data.weight;
        let img = document.createElement("img");
        img.setAttribute("src", imgUrl);
        divCard.appendChild(img);
        let p = document.createElement("p");
        p.textContent = `ID: ${pokId}, name:${name}, type ${type}, height ${height}, weight ${weight} `
        divCard.appendChild(p);
    }
    

}

btn.addEventListener('click', (e)=> {
    getPokemon()
    .then ((res => {
        console.log('all good')
    }))
    .catch((e)=> {alert(`oops no pokimon was found`)
})
    
})

btnNext.addEventListener('click', (e)=> {
    getPokemon()
    .then ((res => {
        console.log('all good')
    }))
    .catch((e)=> {alert(`oops no pokimon was found`)
})
    
})

btnPrev.addEventListener('click', (e)=> {
    getPrevPokemon()
    .then ((res => {
        console.log('all good')
    }))
    .catch((e)=> {alert(`oops no pokimon was found`)
})
    
})


// .then(result)
// .catch(e);