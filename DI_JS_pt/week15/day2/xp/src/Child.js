

import React from 'react';
class Child extends React.Component {
    constructor(){
        super()
    
    }
    componentWillUnmount(){
        alert(`this component named Child is going to be unmounted `)
    }

    render() {
        
            return (
                <div>
                Hello world
                </div>
            )
                   
        
    }
}

export default Child