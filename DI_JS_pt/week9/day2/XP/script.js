//EX 1

const compareToTen=(num)=>{
    return new Promise ((res, rej)=> {
        if(num<10) {
            res (`number is less than 10`)
        } else {
            rej (`number is bigger than 10`)
        }
    }
    )
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

  compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))


  //EX 2 

  const resolvingPromise = () => {
    const status=true;  
    return new Promise((res, rej)=>{
        setTimeout(() => {
            if(status) {
                res("success")
            } else {
                reject("Oops");
            }
        }, 4000)
    }) 
  } 

  resolvingPromise()
  .then((res)=>{
      console.log(res)
  })
  .catch ((err)=>{
    console.log(err)
})

  

  //EX 3 
const prRes = new Promise ((res) => {res(3)});
const prRej = new Promise ((res, rej) => {rej(`Boo!`)});