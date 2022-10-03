
import React from 'react';
class SName extends React.Component {
    constructor(){
        super()
        this.state = {
            fName: this.props.sName
        }

    }
    render() {
        return (
            <div>
                <label>First name</label>
                <input type="text" name="fName" placeholder="First Name" onChange={(e)=>this.props.handleChange(e)}/>
            </div>
        )
        
    }
}

export default FName