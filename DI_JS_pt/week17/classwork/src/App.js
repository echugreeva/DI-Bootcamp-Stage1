import logo from './logo.svg';
import './App.css';
import Acomponent from './components/Acomponent';
import {useState, createContext} from 'react'
import Bcomponent from './components/Bcompnent';
import Calculator from './components/Calculator';
import {connect, useSelector, useDispatch} from 'react-redux'

export const AppContext = createContext();

function App() {
  const [text, setText]=useState('')
  const mytxt = useSelector((state)=>state.txt)
  const dispatch = useDispatch();
  return (
  <>
  <Calculator/>
  <p>{mytxt}</p>
  <input type="text" onChange={(e)=>dispatch({type:'CHNG_TXT', payload:e.target.value})}/>
  </>
    
  );
}

export default connect()(App);


// <Acomponent>
// <div className="App">
// <header className="App-header">
// <Acomponent.Provider value={{text,setText}} />

// </header>
// </div>
// </Acomponent>
