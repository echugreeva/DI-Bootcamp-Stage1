import React from 'react';
// Class component
class Book extends React.Component{
    // constructor(){
    //     super() //empty constructor
    // }
    render(){ //we get render from react conponent
        const{book} = this.props; //in class we get prop from react component as a class
        const {name, author, price, type_book:{description}}=book
        return (

                    <div className="tc grow bg-light-green br3 pa3 ma2 dib shadow-5 w5">
                        <h4>{name}</h4>
                        <div>{author}</div>
                        <div>{price}</div>
                        <div>{description}</div>
                        <button>Get Shop</button>
                    </div>
                )
    }
}

//for function component we don't need to import react
// const Book = (props) => {
//     const{book} = props;
//     console.log(props);
//     const {name, author, price, type_book:{description}}=book //distructing obj
//     return (

//         <div className="tc grow bg-light-green br3 pa3 ma2 dib shadow-5 w5">
//             <h4>{name}</h4>
//             <div>{author}</div>
//             <div>{price}</div>
//             <div>{description}</div>
//         </div>
//     )
    
// }

export default Book;