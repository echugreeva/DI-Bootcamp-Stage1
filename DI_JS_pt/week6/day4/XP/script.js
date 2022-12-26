//ex 1
const sum =(a,b)=>a+b;

// ex 2



//function declaration

function toGrams1(x) {
    return x*1000;
}

toGrams1(1);

// function expression

const toGrams2 = function(x) {
    return x*1000;
}
toGrams2(3);

// Function declarations are hoisted but function expressions are not.

const toGrams = (x) => x*1000;

toGrams(4);


// // ex 3 ( I added default parameters)

(function (numOfChildren = 3, partnerName="John", geo = "US", title="DevOps" ){
console.log(`You will be a ${title} in ${geo}, and married to ${partnerName} with ${numOfChildren} kids.`)
})();

// //ex 4



(function addUserNameDiv (userName) {
    let form = document.forms[0];
    input = form.elements.userName;
    userName = input.value;
    input.addEventListener('keypress', function(event) {
        if (event.code === 'Enter')
        {
          event.preventDefault();

            userName = input.value;

            let ul = document.querySelector("ul");
            let li = document.createElement("li");
            li.classList.add("nav-item");
            li.appendChild(document.createTextNode(userName));
            ul.appendChild(li);
            input.value = "";

        }
      });
    
})();

// easier version
// (function addUserNameDiv (userName=prompt(`your username`)) {
  
//             let ul = document.querySelector("ul");
//             let li = document.createElement("li");
//             li.classList.add("nav-item");
//             li.appendChild(document.createTextNode(userName));
//             ul.appendChild(li);
       
    
// })();

//ex 5 

// part1 added default values for params

makeJuice = (size='s') => {
    (function addIngredients (ing1="apple", ing2="celery", ing3="lemon") {
       
        console.log(`The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}"`)
})();
}

makeJuice();

// part2
makeJuice2 = (size='s') => {
    let ingredients =[];
    function addIngredients (ing1=prompt(`name your ingredient`), ing2=prompt(`name your ingredient`), ing3=prompt(`name your ingredient`)) {
        ingredients.push(ing1);
        ingredients.push(ing2);
        ingredients.push(ing3);
        console.log(ingredients);
    }
    addIngredients();
    addIngredients();

   function displayJuice () {
       let listOfingedients = '';
       ingredients.forEach((i)=>{listOfingedients = listOfingedients.concat(", ", i) })
       console.log(`The client wants a ${size} juice, containing ${listOfingedients}`);
    }
    displayJuice();
}


makeJuice2();
