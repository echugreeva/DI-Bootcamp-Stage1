import {useState, createContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import FiveDaysEx from './components/FiveDaysWeatherEx.json'
import OneDaysEx from './components/OneDayWeatherEx'
//  import AutocompleteEx from './components/AutoCompleteEx'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Favorite from './components/Favorite';
// import Navbar from './components/Navbar'
// import Search from './components/Search'
// import OneDay from './components/OneDay';
// import FiveDays from './components/FiveDay';
import Home from './components/Home'
import { addToLocalStorage, getFromLocalStorage } from "./helpers/localStorage";
export const AppContext = createContext();


function App() {
  
  const [input,setInput]=useState(''); //search for city
  const [chosen, setChosen]=useState({country:'test', city:'test', key:'623'});
  const [favKeys,setFav]=useState([]); //set favorite
  const [keyList,setKeyList]=useState([]) //list of cities from search
  // const [oneDay, setOneDay]=useState(OneDaysEx)
  const [fiveDays, setFiveDay]=useState(FiveDaysEx.DailyForecasts)
  console.log (`end of app ${chosen.key}`)
  console.log (`end of app fav ${favKeys[0]}`)
  return (
    <AppContext.Provider value={
      {keyList,setKeyList,
      input,setInput,
      chosen, setChosen, 
      fiveDays, setFiveDay,
      favKeys,setFav }
      }>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ErrorBoundary><Home/></ErrorBoundary>} />
          <Route exact path="/favorites" element={<ErrorBoundary><div><Favorite/></div></ErrorBoundary>} />
        </Routes> 
    </div>
    </AppContext.Provider>
    
  );
  
}

export default App;
