import { searchSubmit, searchInput } from "./action"

const initState = {
    imageList: [],
    searchInput: '',
}


export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'SUBMIT':
            
                    return { ...state, imageList: action.payload, searchInput: '' }
              
               
        case 'INPUT':
            console.log(state.searchInput)
            return { ...state, searchInput: action.payload }
        default:
            return { ...state }
    }
}