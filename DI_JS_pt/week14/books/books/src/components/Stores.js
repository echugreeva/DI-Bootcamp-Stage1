import React from 'react';
// Class component
class Store extends React.Component{
    // constructor(){
    //     super() //empty constructor
    // }
    render(){ //we get render from react conponent
        const{store} = this.props; //in class we get prop from react component as a class
        const {name, city, address}=store
        return (

                    <div className="tc grow bg-light-pink br3 pa3 ma2 dib shadow-5 w5">
                        <h4>{name}</h4>
                        <div>{city}</div>
                        <div>{address}</div>
                    </div>
                )
    }
}
export default Store;