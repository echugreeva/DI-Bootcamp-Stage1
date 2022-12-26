const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

    let body = document.querySelector('body');
    let container = document.querySelector('.container');
    function createCard (e)  {
            let card = document.createElement("div");
            card.classList.add("card", "col-3", "m-3", "bg-info");
            let img = document.createElement("img");
            img.classList.add("card-img-top", "img-thumbnail", "bg-dark", "rounded-circle", "mt-1");
            img.setAttribute('src', e.image);
            let div = document.createElement("div");
            div.classList.add("card-body");
            div.style.width = "35%";
            let h5 = document.createElement("h5");
            h5.textContent = e.name;
            let p = document.createElement("p");
            p.textContent = e.email;
            card.appendChild(img);
            div.appendChild(h5);
            div.appendChild(p);
            card.appendChild(div);
            container.appendChild(card);
    }
    
    window.addEventListener('load', (event) => {
        robots.forEach((e)=>{
            createCard(e);
            
        });
    });

let form = document.forms[0];
let input = form.elements[0];

let section = document.querySelector('.section');
let p = document.createElement("p");
p.textContent = 'Oops, no robot with this name, try again!';
section.appendChild(p);
section.style.display="none";

form.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log(`enter`);
        event.preventDefault();
        let userInput = input.value;
        let filtered =[];
        let existingCards = container.querySelectorAll(".card");
        
        existingCards.forEach((e)=>{
            e.style.display = "none";
        });

        robots.forEach((e)=>{
                if(e.name.toLowerCase().includes(userInput.toLowerCase())) {
                    filtered.push(e);
                }
        });

            
        if(filtered.length < 1) {
            section.style.display="block";
            
            input.value='';

            } else {
                section.style.display="none";
                filtered.forEach((e)=>{       
                createCard(e);
                input.value='';
                });
            }
       
}
});