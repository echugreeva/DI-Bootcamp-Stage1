const Exp = (props) =>{
    console.log(`props: ${props.item}`)
    console.log(typeof(props.item))
    let data = JSON.parse(props.item)
    console.log(typeof(data))
        

    return (
        
        <div>
        
        
                        <a href='{data.url}'>{data.companyName}</a>
                        <img src='{data.logo}'></img>
                        <p>{data.roles[0].title}</p>
                        <p>{data.roles[0].description}</p>
                        <p>{data.roles[0].location}</p>
           
        </div>
    )      
    
}

export default Exp