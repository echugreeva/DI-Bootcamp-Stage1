

const FavColor = (props)=>{
    return(
        <div>
            <h1>My favorite color is {props.color}</h1>
            <button onClick={props.colorToPink}>Make me pink</button>
        </div>
        
    )
}

export default FavColor;