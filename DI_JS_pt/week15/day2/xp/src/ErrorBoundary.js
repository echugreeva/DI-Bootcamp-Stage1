import React from "react";

class ErrorBoundary  extends React.Component {
    constructor(){
        super();
        this.state ={
            error: null

        }
    }
componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
    this.setState({error: error})
}
    render () {
        if(this.state.error){
            return(
                <div>
                <h2>Oops something went wrong, try again later</h2>
                </div>
            )
        } else {
            return this.props.children
        }
        // 
    }
}

export default ErrorBoundary