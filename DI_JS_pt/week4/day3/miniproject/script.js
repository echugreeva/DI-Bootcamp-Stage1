// let playTheGame = () => {
//    let userNum; 
//    let computerNum = Math.floor((Math.random()*10));
//    let numGames = 3;
//    let agreed = confirm(`Are you ready to play `)
//    ?  userNum = Number(prompt(`Enter a number between 0 and 10`))
//      (isNaN(userNum))
//      ? alert(`Sorry not a number  `) 
//      : (numGames > 0) 
//         ?compareNumbers() 
//         numGames = numGames - 1
//         : alert(`out of chances`)
    
   
//    : alert(`No problem, goodbye`);
// }
let computerNum = Math.floor((Math.random()*10));
let numGames = 3;
let userNum;  

let playTheGame = () => {
    let agreed = confirm(`Are you ready to play `);
    if (agreed) {
        while (numGames>0){
            userNum = Number(prompt(`Guess a number between 0 and 10`));
            if((isNaN(userNum))) {
                alert(`Sorry not a number  `)
            } else if (numGames > 0) {
                    compareNumbers(userNum,computerNum);
                    numGames = numGames - 1;
                } else {
                    alert(`out of chances`);
                }
        }
       
        } else {
        alert(`No problem, goodbye`);
    }
    
}

let compareNumbers = (userNum,computerNum) =>{
    
    if (computerNum === userNum ) { return alert (`Winner`);}
    else if (computerNum < userNum) {
    if (computerNum === userNum ) { return alert (`Winner`);}
        return alert(`Your number is bigger then the computer’\s, guess again`) ;
        

     }else {
        return alert (`Your number is smaller then the computer’\s, guess again`);

}
}


