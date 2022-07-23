

let beerSong =() =>{
    let bottleCount = Number(prompt(`How many bottles are on the table `));
        if (isNaN(bottleCount)) {

            do {bottleCount = Number(prompt(`How many bottles are on the table`)); }
            
                while (isNaN(days));
            } 
    let amountToSubstract = 1 ;
    let bottlesLeft = bottleCount - amountToSubstract;
    let itThem = 'it';  
    
          

        while (bottleCount>0) {
            bottlesLeft = bottleCount - amountToSubstract;

            let song = `${bottleCount} bottles of beer on the wall \n
            ${bottleCount} bottles of beer \n
             Take ${amountToSubstract} down, pass ${itThem} around \n
             ${bottlesLeft} bottles of beer on the wall`;
            
            console.log (song);

            bottleCount = bottleCount - amountToSubstract;

            amountToSubstract = amountToSubstract +1;

            itThem = 'them'

                if (bottleCount <= amountToSubstract) { return console.log ( `0 bottles of beer on the wall \n
                0 bottles of beer `); }
            

            }
            
        }



beerSong()
