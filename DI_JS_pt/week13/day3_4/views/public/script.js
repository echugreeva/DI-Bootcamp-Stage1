    let cat;
    let title;  

    let form = document.forms[0];
    form.addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault();
            cat = document.querySelector("#cat").value;
            title = document.querySelector("#title").value;
            let filter ={
                cat:cat,
                title:title
            }
            console.log(filter)
            fetch ('./search', {
                method:'POST',
                headers:{
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(filter)
              
              })
                .then(res => res)
            //   .then(data => {
            //     console.log(data);
            //   })
              .catch(e => console.log(e))
            }
    });
