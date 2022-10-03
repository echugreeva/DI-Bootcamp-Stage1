import React from 'react';
// import ErrorBoundary from './ErrorBoundary';
import FName from './components/Fname';

class App extends React.Component{
  constructor (){
    super();
    this.state = {
      
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (e) => {
    console.log(e.target.type, e.target.checked);
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({[e.target.name]:value})
  }

  render (){
    
    return (
      <div className='App'>
        <FName/>
        <h1>bla</h1>
      </div>
     
      
    )
  }


  
}

export default App;