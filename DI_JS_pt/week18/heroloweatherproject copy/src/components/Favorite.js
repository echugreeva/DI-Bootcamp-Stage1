import {useContext} from 'react'
import {AppContext} from '../App'
import OneDay from "./OneDay"

const Favorite = (props)=> {
    const {favKeys} = AppContext
    return (
        <>
        <OneDay/>
        </>
    )
}

export default Favorite