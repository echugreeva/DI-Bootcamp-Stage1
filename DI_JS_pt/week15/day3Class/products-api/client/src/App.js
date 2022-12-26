import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop';
import {useState, useEffect} from 'react'
import Shop2 from './components/Shop2';

function App() {
  const [name, setState] = useState('')  
  // [name, setState] just names in ('') can set default value
  //setState 
  const [lName, setLName] = useState('')  

  useEffect(()=>{
    console.log('Hi')
  })
// when mounting component use effect being cold, on first stage comp did mount, and then on update, will unmount
//to have only after mount add, []empty, if add after some variable change add var to array
  return (
    <div className="App">
      <header className="App-header">
    <Shop/>
    {name}
    <input type='text' onChange={(e)=>setState(e.target.value)}/>
    <input type='text' onChange={(e)=>setLName(e.target.value)}/>
    {lName}
    <Shop2/>
      </header>
    </div>
  );
}

export default App;
