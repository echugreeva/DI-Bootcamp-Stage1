import ErrorBoundary from './ErrorBoundary';
import Navbar from './Navbar'
import Search from './Search'
import OneDay from './OneDay';
import FiveDays from './FiveDay';
import { useContext } from 'react';
import { AppContext } from '../App';


const Home = (props) => {
    // const addToFav = (key)=> {
    //     setFav([{
    //         country:chosen.country, 
    //         city:chosen.city,
    //         key: key}])
        
    // }

    const {favKeys,setFav, chosen} = useContext(AppContext)

    return (
        <div>
        <Navbar/>
        <ErrorBoundary><Search/></ErrorBoundary>
        <ErrorBoundary><OneDay/></ErrorBoundary>
        <button>Add to Favorite</button>
        <ErrorBoundary><FiveDays/></ErrorBoundary>
        
        </div>
        
    )
}

export default Home