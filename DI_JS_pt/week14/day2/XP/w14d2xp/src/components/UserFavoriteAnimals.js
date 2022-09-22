import React from 'react';

const UserFavAnimals = (props) => {
    
    // console.log(`prop ${props}`);
    // const {animal} = props;
    // console.log(`animal ${animal}`);
    console.log(props);
    return (
        
            // <li>
            //     {animal}
            // </li>
            props.animals.map(item=>(
                
                <li>{item}</li>
            ))
                        
        
    )
    
}

export default UserFavAnimals;