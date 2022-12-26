import {useContext} from 'react'
import { AppContext } from '../App'
import Bcomponent from './Bcompnent'

const Acomponent =(props)=> {
    const {text,setText} = useContext(AppContext)
    return(
        <div>
            <input type="text" onChange = {(e)=>setText(e.target.value)}/>
            <div>text input:{text}</div>
            <Bcomponent/>
        </div>
    )
}

export default Acomponent