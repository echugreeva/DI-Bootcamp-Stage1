import React from 'react';
import './App.css';

class App extends React.Component{
  constructor (){
    super();
    this.state = {
      input1:'',
      input2:'',
      total:'your result'
    };
  }
  
  handleInput1 = (event) => {
    this.setState({input1: Number(event.target.value)})
  }

  handleInput2 = (event) => {
    this.setState({input2: Number(event.target.value)})
  }

  add = () => {
    this.setState({total: this.state.input1 + this.state.input2})
  }



  render (){
    
    return (
      <div className='mw5 mw7-ns center bg-light-gray pa3 ph5-ns'>
        <h1  className ='tc ma3' >Adding 2 numbers</h1>
        <input className ='center db ma3'id='input1' type = "number" onChange={this.handleInput1}/>
        <input className ='center db ma3'id='input2' type = "number" onChange={this.handleInput2}/>
        <button className ='center db ma3'onClick={this.add}>Add them</button>
        <div className="h2-m bg-hot-pink w-third center ma3 tc">{this.state.total}</div>
      </div>
     
      
    )
  }


  
}

export default App;