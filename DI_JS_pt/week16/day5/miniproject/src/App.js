import {useState, useEffect} from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import SearchBar from './components/SearchBar';
import Mountains from './components/Mountains';
import Cat from './components/Cat';
import Wine from './components/Wine';
import Food from './components/Food';
import AnySearch from './components/AnySearch';
import Home from './components/Home'


function App(props) {


//   const [imgList, setImages] = useState({
//   images:[],
  
// })

// useEffect (()=> {
//   const options = {
//     method: 'GET',
//     headers: {
//       Authorization: '563492ad6f91700001000001099cb8888c044472af40dc3b60a997e1',
//       'X-RapidAPI-Key': '4980814c76msh916d21acc0ea2b9p1680a1jsn3be7217effc7',
//       'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://pexelsdimasv1.p.rapidapi.com/v1/search?query=ocean&locale=en-US&per_page=30&page=1&Max=30', options)
//     .then(response => response.json())
//     .then((response) => {
//       console.log(response)
//       setImages({
//         images:response.photos
//       })
      
    
//     })
//     .catch(err => console.error(err))}, [])
//     console.log(imgList.images)
  return (
    <div className="App">
      
        <h1>Alternative Snapshot</h1>
      
        <SearchBar/>
        <div>
          <NavLink to="/mountains">
            <button>Mountains</button>
          </NavLink>
          <NavLink to="/cats">
            <button>Cats</button>
          </NavLink>
          <NavLink to="/food">
            <button>Food</button>
          </NavLink>
          <NavLink to="/wine">
            <button>Wine</button>
          </NavLink>
        </div>
        
        <Routes>

          <Route exact path="/" element={<ErrorBoundary><Home/></ErrorBoundary>} />
          <Route exact path="/mountains" element={<ErrorBoundary><Mountains/></ErrorBoundary>} />
          <Route exact path="/cats" element={<ErrorBoundary><Cat/></ErrorBoundary>} />
          <Route exact path="/food" element={<ErrorBoundary><Food/></ErrorBoundary>} />
          <Route exact path="/wine" element={<ErrorBoundary><Wine/></ErrorBoundary>} />
          <Route exact path="/search" element={<ErrorBoundary><AnySearch/></ErrorBoundary>} />

        </Routes>
      
    </div>
  );
}

export default App;
