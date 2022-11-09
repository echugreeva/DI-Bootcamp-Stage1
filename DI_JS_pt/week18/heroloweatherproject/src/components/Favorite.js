import { useEffect, useState} from 'react'
import OneDay from "./OneDay"
// import OneChange from './OneChange'
import Navbar from './Navbar'
import { addToLocalStorage, getFromLocalStorage } from "../helpers/localStorage";
import ErrorBoundary from './ErrorBoundary';

const Favorite = (props)=> {
    const [favKeys, setFav] = useState(getFromLocalStorage('favorites')|| [])
    console.log(favKeys)
        
        if(favKeys.length < 1) {
            return (
                <>
                <Navbar/>
                <p>no favorites yet</p>
                </>
                
            )
        } else {

            return (
                <>
                <Navbar/>

                {
                    favKeys.map ((item, i) => {

                        
                                return (
                                       
                                    <div key={i}>                   
                                            <ErrorBoundary> <OneDay keyF={item.key} country ={item.country} city ={item.city} /> </ErrorBoundary>
                                        
                                            <button onClick = {()=>{
                                                favKeys.splice(favKeys.indexOf(item), 1);
                                                addToLocalStorage('favorites', favKeys);
                                                setFav(getFromLocalStorage('favorites'))
                                            }}>Remove from favorites</button>
                                    </div>
                                    )
                            
                            })
                  
                }
                </>
            )
}
    
    
}

export default Favorite

