const Card = (props)=> {
    const {info} = props;
    console.log(props);
    return (
        <div style={{display: 'inline-block', width: '25%', fontSize: '0.75em', backgroundColor: 'royalblue', margin: '2em'}} onClick={props.onClick}>
            <img src={info.image} style={{height:'200px'}}/>
            <p>Name: {info.name}</p>
            <p>Occupation: {info.occupation}</p>
        </div>
    )
    
}

export default Card