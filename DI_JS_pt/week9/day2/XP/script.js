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