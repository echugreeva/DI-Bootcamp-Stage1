// import logo from './logo.svg';
// import './App.css';
// import Counter from './Counter';
// import ErrorBoundary from './ErrorBoundary';


// Ex1 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Simumlation 1, both counters in 1 err</p>
//         <ErrorBoundary>
//           <Counter/>
//           <Counter/>
//         </ErrorBoundary>
//         <p>Simumlation 2, 1 counter in 1 err</p>
//         <ErrorBoundary>
//           <Counter/>
//         </ErrorBoundary>
//         <ErrorBoundary>
//           <Counter/>
//         </ErrorBoundary>
//         <p>Simumlation 3, no err counter</p>
//           <Counter/>

//       </header>
//     </div>
//   );
// }

// export default App;


// Ex2 

import React from 'react';
import FavColor from './FavColor';
import './App.css';
import Child from './Child';

class App extends React.Component{
  constructor (){
    super();
    this.state = {
      color:'red',
      show: true
    };
  
  }
  

  shouldComponentUpdate() {
    return true
  }

  
  // if set to false color won't change on click

  colorToPink =()=>{
    this.setState({color:'pink'});
  }

  noShow = () => {
      this.setState({show: false})
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
  
    document.querySelector('#prev').innerHTML = 
        
  `Before the update my favorite color was ${prevState.color}`
  }
  componentDidUpdate() 
    { 
      document.querySelector('#didUpdate').innerHTML = 
        
        // `My favorite color is ${this.state.color}`
        `The updated favorite color is ${this.state.color}`
        
    }
    
  
  render (){
    let child;
    console.log(this.state.show)
    if (this.state.show){
      child = <Child/>
    }
    return (
      <div className="App">
      <header className="App-header">
        {child}
        <FavColor color={this.state.color} colorToPink ={this.colorToPink}/>
        <div id="didUpdate"></div>
        <div id="prev"></div>
        <button onClick={this.noShow}>remove hello world</button>
      </header>
    </div>   
    )
  }
  
}

export default App;