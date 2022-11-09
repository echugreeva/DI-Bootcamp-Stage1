import {useState, createContext} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import LoginReg from './components/LoginReg';
import Nav from './components/Nav';
import Home from './components/Home';

export const AppContext = createContext(null);

function App() {
  const [accessToken, setAccessToken] = useState('');
  return (
    <AppContext.Provider value={{accessToken, setAccessToken}}>
      <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginReg title={'Login'}/>}/>
        <Route path='/register' element={<LoginReg title={'Register'}/>}/>
      </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
