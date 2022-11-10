import ErrorBoundary from './ErrorBoundary';
import Navbar from './Navbar'
import Search from './Search'
import OneDay from './OneDay';
import FiveDays from './FiveDay';
import { useContext } from 'react';
import { AppContext } from '../App';
import { addToLocalStorage, getFromLocalStorage } from "../helpers/localStorage";


const Home = (props) => {
    const {chosen, oneDay} = useContext(AppContext)
        
    return (
        <div>
        <Navbar/>
        <ErrorBoundary><Search/></ErrorBoundary>
        <ErrorBoundary><OneDay keyC={chosen.key}/></ErrorBoundary>
        <button className='mv2' onClick={()=>{
            let favorite = getFromLocalStorage('favorites')||[];
            favorite.push(chosen);
            console.log(chosen)
            addToLocalStorage('favorites', favorite)
            // console.log(favorite)
            }}
            >Add to Favorite</button>
        <ErrorBoundary><FiveDays/></ErrorBoundary>
        
        
        
        
        </div>
        

    )
    
}

export default Home

