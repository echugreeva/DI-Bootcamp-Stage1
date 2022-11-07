import { useEffect, useState} from 'react'
import OneDay from "./OneDay"
import OneChange from './OneChange'
import Navbar from './Navbar'
import { addToLocalStorage, getFromLocalStorage } from "../helpers/localStorage";
import ErrorBoundary from './ErrorBoundary';



const Favorite = (props)=> {

    const [favKeys, setFav] = useState(getFromLocalStorage('favorites')|| [])


    useEffect(()=>{
     },[getFromLocalStorage])
        
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
                <p>heki=</p>
                {
                    favKeys.map ((item, i) => {

                        fetch(
                            `http://dataservice.accuweather.com/currentconditions/v1/${item.key}?apikey=lBHawUgG9LRqS3TZNMPItFBx1VH87wIt`
                          )
                            .then((res) => res.json())
                            .then((res) => {
                                console.log(res);
                                return (
                                        <div key={i}>
                                            {item.country}, 
                                            {item.city}
                                            <ErrorBoundary> <OneDay data={res}/> </ErrorBoundary>
                                            <button onClick = {()=>{
                                                favKeys.splice(favKeys.indexOf(item), 1);
                                                addToLocalStorage('favorites', favKeys);
                                                setFav(getFromLocalStorage('favorites'))
                                            }}>Remove from favorites</button>
                                        </div>
                                        
                                    )
                            
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                        
                    })
                }
                </>
            )
}
    
    
}

export default Favorite

