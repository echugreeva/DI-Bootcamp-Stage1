import React from 'react';
// import './App.css';
// import Parent from './Parent';
// import Child from './Child';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component{
  constructor (){
    super();
    this.state = {
      
    };
  }
  
  render (){
    
    return (
      <div className='App'>
        <ErrorBoundary>
          <Counter/>
          <Counter/>
        </ErrorBoundary>
      </div>
     
      
    )
  }


  
}

export default App;