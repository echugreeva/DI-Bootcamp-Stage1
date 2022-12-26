// Ex 2
import React from 'react';


class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            isToggleOn: true,
        }
      }

    clickMe = () =>{
        // this.setState({alert:'I was clicked'})
        alert(`I was clicked`)
    }

    handleKeyPress =(event) => {
        if(event.code === 'Enter'){
            // this.setState.input = event.target.value;
            alert(`The Enter key was pressed, your input is: ${event.target.value}`) 
        }
        

    }

    onClick = () =>{
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
        }
    

    render() {
        return (
            <>
                <button
                    type="button"
                    onClick={this.clickMe}> 
                    click me
                </button>
                <input 
                    type ="text"
                    onKeyPress = {this.handleKeyPress}
                />
                <button
                    type="button"
                    onClick={this.onClick}> 
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </>
            
            
        )
        }
    
}

export default Events