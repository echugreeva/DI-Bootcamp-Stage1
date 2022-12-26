import React from 'react';
import Garage from './Garage';


// P 1


// class Car extends React.Component {
//     constructor(props) {
//         super(props);
//       }
//     render() {
//         return (<p>This car is {this.props.carinfo.model}</p>)
//     }
// }

// P 2
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red"   
        };
      }
    render() {
        return (
            <div>
                <Garage/>
                <p>This car is {this.state.color} {this.props.carinfo.model}</p>
            </div>
        
        )
    }
}

export default Car;