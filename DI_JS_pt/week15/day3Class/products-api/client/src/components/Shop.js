import React from 'react'

class Shop extends React.Component {
    constructor(){
        super();
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:5001/api/products/all')
        .then(resp=>resp.json())
        .then(resp=>this.setState({products:resp}))
    }


    render (){
        return (
            <div>
                <h1>Shop</h1>
                {
                    this.state.products.map((item)=>{
                        return(
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>     
                            </div>
                        ) 
                    })
                }
            </div>
            
        )
    }
    
}

export default Shop