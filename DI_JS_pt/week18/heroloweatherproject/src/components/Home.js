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
        <div style={{minHeight:'100vh'}}>
        
        <ErrorBoundary><Search className='z-999'/></ErrorBoundary>
        <ErrorBoundary><OneDay keyC={chosen.key}/></ErrorBoundary>
        {/* <button className='f6 grow no-underline br-pill b--dark-green ba bw2 ph3 pv2 mb2 dib dark-green' onClick={()=>{
            let favorite = getFromLocalStorage('favorites')||[];
            favorite.push(chosen);
            console.log(chosen)
            addToLocalStorage('favorites', favorite)
            // console.log(favorite)
            }}
            >Add to Favorite</button> */}
        <ErrorBoundary><FiveDays/></ErrorBoundary>
        
        
        
        
        </div>
        

    )
    
}

export default Home

