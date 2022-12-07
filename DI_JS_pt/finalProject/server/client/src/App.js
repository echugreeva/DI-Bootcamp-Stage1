import {useState, createContext} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import LogReg from './components/LogReg';
import Team from './components/Team'
import Welcome from './components/Welcome';
import Navbar from './components/Navbar'
// import Nav from './components/Nav';
// import Users from './components/Users';
// import Home from './components/Home';
import {Auth} from './components/auth/Auth'
import MyCabinet from './components/Cabinet/MyCabinet';

export const AppContext = createContext();

function App() {
  const [userId, setId]= useState('')
  const [teamId, setTeam]= useState('')
  const [tLId, setTL]= useState('')
  const [accessToken, setAccessToken] = useState('');
  return (
     <AppContext.Provider value={{setId, userId,  setTeam,  teamId, setTL, tLId, accessToken, setAccessToken}}>
      <div className="App">
      {/* <Nav/> */}
     <Navbar/>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<LogReg title={'Login'}/>}/>
        <Route path='/register' element={<LogReg title={'Register'}/>}/>
        <Route path='/team' element={<Auth><Team/></Auth>}/>
        <Route path='/mycabinet' element={<Auth><MyCabinet/></Auth>}/>
       
      </Routes>
      </div>
     </AppContext.Provider>
  );
}

export default App;