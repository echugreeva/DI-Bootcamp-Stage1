// EX 1 


const makeAllCaps = (arr) => {
  return new Promise((res, rej)=>{
      let allCaps = arr.map(item => {
      if(typeof item === 'string'){
        return item.toUpperCase()
      }
      else{
        rej('Error, At least one item is not a string')
      }
    })
    res(allCaps);
  })
}

const sortWords = (arr) => {
  return new Promise((res, rej)=>{
    if(arr.length > 4){
      res(arr.sort())
    }
    else {
      rej('Error, array is too short')
    }
  })
}
makeAllCaps(arr)
.then(res => {
  return sortWords(res)
})
.then(res => {
  console.log(res);
})
.catch(e => {
  console.log(e);
})


// EX 2

let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

  const toJs = (a) =>{
     return new Promise ((resolve, reject)=>{
        let obj = JSON.parse(a)
        if(Object.keys(morse).length > 0) {
            resolve(obj)
        } else {
            reject(`object is empty`)
        }
    })
  }

  const toMorse = (obj) => {
      return new Promise ((resolve, reject)=>{
          let userWord = prompt(`input a word`).toLowerCase();
          let translation = []
        
          for (var i = 0; i < userWord.length; i++) {
            if(!(userWord.charAt(i) in obj)){
                reject(`please try another word, don't use spaces `)
            } else {
                code = obj[userWord.charAt(i)]
                translation.push(code);

            }
          }
          resolve(translation);
      })
  }

  const joinWords = (arr) =>{
      console.log(arr.join('\r\n'));
      
  }

  toJs(morse)
  .then(res => {
    return toMorse(res)
  })
  .then(res =>{
    joinWords(res)
  })
  .catch(e => {
    console.log(e);
  });