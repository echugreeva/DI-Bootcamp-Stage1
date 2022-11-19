import {useState, createContext} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import LogReg from './components/LogReg';
import Team from './components/Team'
// import Nav from './components/Nav';
// import Users from './components/Users';
// import Home from './components/Home';
// import {Auth} from './auth/Auth'

export const AppContext = createContext();

function App() {
  const [userId, setId]= useState('1')
  const [teamId, setTeam]= useState('1')
  const [tLId, setTL]= useState('1')
  // const [accessToken, setAccessToken] = useState('');
  return (
     <AppContext.Provider value={{userId, teamId, tLId}}>
      <div className="App">
      {/* <Nav/> */}
      <Routes>

        <Route path='/login' element={<LogReg title={'Login'}/>}/>
        <Route path='/register' element={<LogReg title={'Register'}/>}/>
        <Route path='/team' element={<Team/>}/>
       
      </Routes>
      </div>
     </AppContext.Provider>
  );
}

export default App;