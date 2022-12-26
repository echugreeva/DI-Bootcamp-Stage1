



    


    //create options for dropdown
    let form = document.forms[0];
    let from = form.from;
    let to = form.to;
    let amount = form.number;
    let output = form.output;
    let btn = document.querySelector("button");

    let allCurrencies=[];
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4980814c76msh916d21acc0ea2b9p1680a1jsn3be7217effc7',
            'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
        }
    };
    
    fetch('https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            allCurrencies = response;
            allCurrencies.forEach((item) => {
                let option = document.createElement("option");
                let option2 = document.createElement("option")
                option.setAttribute("value", item.symbol);
                option.textContent = item.symbol;
                from.appendChild(option);
                option2.setAttribute("value", item.symbol);
                option2.textContent = item.symbol;
                to.appendChild(option2);
        })
    })
        .catch(err => console.error(err));
     
    console.log(allCurrencies);


    //on submit, get inputs, send request, then add to output



form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log(`form submited from: ${from.value} to ${to.value} amount ${amount.value}`)
    const sendRequest = async () => {

        const convert = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4980814c76msh916d21acc0ea2b9p1680a1jsn3be7217effc7',
                'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
            }
        };
        
        await fetch(`https://currency-converter18.p.rapidapi.com/api/v1/convert?from=${from.value}&to=${to.value}&amount=${amount.value}`, convert)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            output.value = response.result.convertedAmount;
        })
        .catch(err => console.error(err));
    }
    sendRequest()
})

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    let x = from.value;
    let y = to.value;
    from.value = y;
    to.value = x;
})

    // allCurrencies.forEach((item) => {
    //     let option = document.createElement("option");
    //     let option2 = document.createElement("option")
    //     option.setAttribute("value", item.symbol);
    //     option.textContent = item.symbol;
    //     from.appendChild(option);
    //     option2.setAttribute("value", item.symbol);
    //     option2.textContent = item.symbol;
    //     to.appendChild(option2);
    //     // console.log(option)

    // })


// window.addEventListener('onload' (e)={
//         for (let cur of allCurrencies) {
//             let option = document.createElement("option");
//             let option2 = document.createElement("option")
//             option.setAttribute("value", cur.symbol);
//             option.textContent = cur.symbol;
//             from.appendChild(option);
//             option2.setAttribute("value", cur.symbol);
//             option2.textContent = cur.symbol;
//             to.appendChild(option2);
//             // console.log(option)  
//         }
  
//     })
// window.addEventListener('load', (e)=> {
    
// })