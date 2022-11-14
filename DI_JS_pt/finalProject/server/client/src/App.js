import {useState, createContext} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import LogReg from './components/LogReg';
// import Nav from './components/Nav';
// import Users from './components/Users';
// import Home from './components/Home';
// import {Auth} from './auth/Auth'

// export const AppContext = createContext(null);

function App() {
  // const [accessToken, setAccessToken] = useState('');
  return (
    // <AppContext.Provider value={{accessToken, setAccessToken}}>
      <div className="App">
      {/* <Nav/> */}
      <Routes>

        <Route path='/login' element={<LogReg title={'Login'}/>}/>
        <Route path='/register' element={<LogReg title={'Register'}/>}/>
       
      </Routes>
      </div>
    // </AppContext.Provider>
  );
}

export default App;