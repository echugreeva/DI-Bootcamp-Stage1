import {useContext} from 'react'
import { AppContext } from '../App'
const Bcomponent = (props)=> {
    const {text} = useContext(AppContext);
    return (
        <div>
            {text}
        </div>
    )
    
}

export default Bcomponent