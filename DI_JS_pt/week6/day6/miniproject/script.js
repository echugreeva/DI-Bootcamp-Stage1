let myQuotes= [
    {
        id:0,
        author:"Friedrich Nietzsche",
        quote:"That which does not kill us makes us stronger.",
        likes: 0
    },
    {
        id:1,
        author:"Nelson Mandela",
        quote:"That which does not The greatest glory in living lies not in never falling, but in rising every time we fall.",
        likes: 0
    },
    {
        id:2,
        author:"Winston Churchill",
        quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
        likes: 0
    },
    {
        id:3,
        author:"Tony Robbins",
        quote:"The only impossible journey is the one you never begin.",
        likes: 0
    },
    {
        id:4,
        author:"Edmund Burke",
        quote:"The only thing necessary for the triumph of evil is for good men to do nothing.",
        likes: 0
    },
    {
        id:5,
        author:"Albert Einstein",
        quote:"Insanity is doing the same thing over and over again and expecting different results.",
        likes: 0,
    }

];

let previousId;
let section = document.querySelector("section");
let btn = document.querySelector("button");
let p = document.createElement("p");
let h3 = document.createElement("h3");
section.appendChild(h3);
section.appendChild(p);

let numChar = document.querySelector(".numChar");
let numCharNoSpace = document.querySelector(".numCharNoSpace");
let numWords = document.querySelector(".numWords");
let like = document.querySelector(".like");
let span = document.querySelector("#numChar");
let spanNumCharNoSpace = document.querySelector("#numCharNoSpace");
let spanNumWords = document.querySelector("#numWords");
let spanLike = document.querySelector("#like");

numChar.style.display = "none";
numCharNoSpace.style.display = "none";
numWords.style.display = "none";
like.style.display = "none";


const randomQuote =()=> {
 
    let quoteId = Math.floor(Math.random()*(myQuotes.length - 1));
    while (quoteId === previousId) {
        quoteId = Math.floor(Math.random()*(myQuotes.length - 1));
    }
   

    p.textContent  = myQuotes[quoteId]['author'];
    h3.textContent  = myQuotes[quoteId]['quote'];
    span.textContent ="";
    spanNumCharNoSpace.textContent="";
    spanNumWords.textContent ="";
    spanLike.textContent = myQuotes[quoteId]['likes'];

    numChar.style.display = "inline";
    numChar.addEventListener("click", function(event) {
        event.preventDefault;
        let numberToShow;
        numberToShow = myQuotes[quoteId]['quote'].length;
        span.textContent = numberToShow;

    });
    numCharNoSpace.style.display = "inline";
    numCharNoSpace.addEventListener("click", function(event) {
        event.preventDefault;
        let numberToShow;
        numberToShow = myQuotes[quoteId]['quote'].split(" ").join("").length;
        spanNumCharNoSpace.textContent = numberToShow;

    });
    numWords.style.display = "inline";
    numWords.addEventListener("click", function(event) {
        event.preventDefault;
        let numberToShow;
        numberToShow = () => {
            return myQuotes[quoteId]['quote'].split(" ").length;
        }
        spanNumWords.textContent = numberToShow();

    });

    like.style.display = "inline";
    like.addEventListener("click", function(event) {
        event.preventDefault;
        myQuotes[quoteId]['likes'] += 1;
        spanLike.textContent = myQuotes[quoteId]['likes'];
    });
    previousId = quoteId;

}

btn.addEventListener('click', function (event){
    event.preventDefault;
    randomQuote();
})

let form = document.forms[0];


function addNewQuote () {
    let newQuote = {};
    let userQuote = form.elements.quote.value;
    let userAuthor = form.elements.author.value;
    let newId = myQuotes.length+1;
    newQuote["id"] = newId;
    newQuote["author"] = userAuthor;
    newQuote["quote"] = userQuote;
    newQuote["likes"] = 0;
    myQuotes.push(newQuote);
    form.elements.author.value='';
    form.elements.quote.value='';
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    addNewQuote();
    console.log(myQuotes);
    
})


//part 3
//create dropdown with all autors, once author is picked create ps for all his quotes

let dropdown = document.querySelector(".dropdown-menu");
let toDisplay = document.querySelector(".toDisplay");

myQuotes.forEach((element)=>{
    let li = document.createElement('li');
    let author = element['author'];
    li.textContent = author;
    li.addEventListener('click',() => showQuotes(author));
    dropdown.appendChild(li);
    
    });

function showQuotes (author) {

    let string;
    myQuotes.forEach((element) => {
        if (element['author'] === author) {
            string = element['quote'];
        }
    })
    let p = document.createElement("p");
    p.textContent = string;
    toDisplay.appendChild(p);
}



//

