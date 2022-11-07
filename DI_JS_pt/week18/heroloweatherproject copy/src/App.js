import {useState, createContext} from 'react'
// import FiveDaysEx from './components/FiveDaysWeatherEx.json'
// import OneDaysEx from './components/OneDayWeatherEx'
 import AutocompleteEx from './components/AutoCompleteEx'
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar'
import Search from './components/Search'
// import OneDay from './components/OneDay';
// import FiveDays from './components/FiveDay';
import Home from './components/Home'
export const AppContext = createContext();

function App() {
  const [input,setInput]=useState('');
  const [chosen, setChosen]=useState({});
  const [favKeys,setFav]=useState([]);
  const [keyList,setKeyList]=useState(AutocompleteEx)
  const [oneDay, setOneDay]=useState([])
  const [fiveDays, setFiveDay]=useState([])

  return (
    <AppContext.Provider value={{keyList,setKeyList,input,setInput,chosen, setChosen, oneDay, setOneDay,fiveDays, setFiveDay,favKeys,setFav }}>
      <div className="App">
      <ErrorBoundary><Home/></ErrorBoundary>
    </div>
    </AppContext.Provider>
    
  );
}

export default App;
