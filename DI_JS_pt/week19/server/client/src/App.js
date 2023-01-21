import {useState, createContext} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import LoginReg from './components/LoginReg';
import Nav from './components/Nav';
import Users from './components/Users';
import Home from './components/Home';
import {Auth} from './auth/Auth'

export const AppContext = createContext(null);

function App() {
  const [accessToken, setAccessToken] = useState('');
  
  //on login change userId
  return (
    <AppContext.Provider value={{accessToken, setAccessToken}}>
      <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginReg title={'Login'}/>}/>
        <Route path='/register' element={<LoginReg title={'Register'}/>}/>
        <Route path='/admin' element={<Auth><Users/></Auth>}/>
      </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
