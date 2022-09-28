import React from 'react';
class Garage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            size: "small",
        }
      }
      
    render() {
        
        return (<p>Who lives in my {this.state.size} garage?</p>)
        
    }
}

export default Garage;