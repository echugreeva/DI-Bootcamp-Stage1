 const FormValues =(props)=>{
    console.log(props)
        return (
            
            <div>
                <div>Entered information</div>
                <div>Your Name: {props.fName} {props.lName}</div>
                <div>Age: {props.age}</div>
                <div>Gender: {props.gender} </div>
                <div>Destination: {props.destination}</div>
                <div>Your dietary restrictions:</div>
                <div>Nuts free:{props.nutsFree?'Yes':'No'}</div>
                <div>Lactose free:{props.lactoseFree?'Yes':'No'}</div>
                <div>Vegan:{props.vegan?'Yes':'No'}</div>
            </div>
        )
    }
        
        
    

export default FormValues