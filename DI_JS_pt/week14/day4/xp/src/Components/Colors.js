// Ex4

import React from 'react';
class Colors extends React.Component {
    constructor() {
        super();
        this.state ={
            favColor: "red",
        };
      }
     
    componentDidMount() {
        setTimeout(()=> {
            this.setState({favColor: 'yellow'})
        }, 5000)
    }
    changeColor = () =>{
        this.setState({favColor: 'blue'})
        }
    
    render() {
        
        return (
            <div>
                <p>My favourite color is <span style={{fontStyle: 'italic'}}>{this.state.favColor}</span></p>
                <button
                    type="button"
                    onClick={this.changeColor}> 
                    change color
                </button>
            </div>
            
            )
        
    }
}
        


export default Colors;