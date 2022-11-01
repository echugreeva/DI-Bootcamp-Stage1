const Loading = ({showLoading}) => {
    console.log(showLoading)
    if(showLoading===1){
        return (
            <h1>Loading</h1>
        )
    }else{
        return (
            <></>
        )
    }
    
}

export default Loading