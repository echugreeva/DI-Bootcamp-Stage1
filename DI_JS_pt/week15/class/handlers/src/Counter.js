import React from 'react';
class Counter extends React.Component{
    constructor (){
      super();
      this.state = {
        count: 0,
      };
    }
    
    incrCount = () => {
       this.setState({count:this.state.count + 1})
    }

    render (){
      if(this.state.count > 5) {
          throw Error (`crushed`)
      }
      return (
        <div className='App'>
         <div style={{textAlign: 'center'}}>
             {this.state.count}
         </div>
         <button style={{marginLeft: '45%'}} onClick={this.incrCount}>I want a higher number</button>
        </div>
       
        
      )
    }
  
  
    
  }
  
  export default Counter;