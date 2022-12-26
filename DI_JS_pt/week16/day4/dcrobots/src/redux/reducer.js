import { robots } from "../components/robots"
import searchFieldChange from "./action"

const initState = {
    robots: robots,
    searchField:'',
    
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case 'SEARCH':
        return  {...state, searchField: action.payload}
    
    default:
    return {...state}
    }
}