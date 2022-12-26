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
                
                <p>no favorites yet</p>
                </>
                
            )
        } else {

            return (
                <div>
                

                {
                    favKeys.map ((item, i) => {

                        
                                return (
                                       
                                    <div className="" key={i}>                   
                                            <ErrorBoundary> <OneDay keyF={item.key} country ={item.country} city ={item.city} /> </ErrorBoundary>
                                        
                                            {/* <button className='f6 grow no-underline br-pill b--dark-pink ba bw2 ph3 pv2 mb2 dib dark-pink' onClick = {()=>{
                                                favKeys.splice(favKeys.indexOf(item), 1);
                                                addToLocalStorage('favorites', favKeys);
                                                setFav(getFromLocalStorage('favorites'))
                                            }}>Remove from favorites</button> */}
                                    </div>
                                    )
                            
                            })
                  
                }
                </div>
            )
}
    
    
}

export default Favorite

