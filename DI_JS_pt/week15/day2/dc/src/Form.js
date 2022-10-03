import './Form.css'
const Form = (props)=>{
    console.log(props)
    return(
        <div>
            <form>
            <label>First name: </label>
            <input  type="text"
                    placeholder="first name"
                    name="fName"
                    value={props.fName}
                    onChange={props.handleChange} />
            Last Name:
            <input 
                    type="text"
                    placeholder="last name"
                    name="lName"
                    value={props.lName}
                    onChange={props.handleChange} />
            Age:
            <input
                    type="number"
                    placeholder="age"
                    name="age"
                    value={props.age}
                    onChange={props.handleChange} />       
            Woman<input 
                    type ='radio'
                    id= 'woman'
                    name = 'gender'
                    value = 'woman'
                    onChange={props.handleChange} />   
            Man<input
                    type ='radio'
                    id= 'man'
                    name = 'gender'
                    value = 'man'
                    onChange={props.handleChange} /> 
            <p>Select you destination</p>
            <select name='destination' onChange={props.handleChange} placeholder="choose">
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
            </select>
            
            Nuts free:<input  type='checkbox' name='nutsFree' value='nutsFree' onChange={props.handleChange} />
            Lactose free:<input type='checkbox' name='lactoseFree' value='lactoseFree' onChange={props.handleChange} />
            Vegan:<input  type='checkbox' name='vegan' value='vegan' onChange={props.handleChange} />
           
            <button onClick={props.handleClick}>Submit</button>
      </form>
        </div>
        
        
    )
}

export default Form;