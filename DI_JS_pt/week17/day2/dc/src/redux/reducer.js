
import {searchFieldChange, getRobots} from "./action"

const initState = {
    robots: [],
    searchField:'',
    showLoading: 0,
    error:''
    
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case 'SEARCH':
        return  {...state, searchField: action.payload}

        case 'LOAD':
            return  {...state, showLoading: action.payload}
            
        case 'GET_SUCCESS':
        return  {...state, robots: action.payload.robots, showLoading: action.payload.showLoading}


        case 'GET_FAIL':
        return  {...state, showLoading: action.payload.showLoading, error:action.payload.err}
    
    
    default:
    return {...state}
    }
}