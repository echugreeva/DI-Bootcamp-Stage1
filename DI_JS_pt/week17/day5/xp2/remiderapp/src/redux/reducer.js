import {ADD_REMINDER, DELETE, CLEAR} from './constants'
// import { addReminder, delReminder, clear } from './actions'

const initState = {
    itemsList: [],
    // dueDate: '',

}


export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case ADD_REMINDER:
            console.log(action.payload)
            console.log(action.payload2)
            return { ...state, itemsList:[...state.itemsList, [action.payload, action.payload2]]}


        case DELETE:
            console.log(state.searchInput)
            let newList = [...state.itemsList]
            newList.splice(action.payload,1)
            return { ...state, itemsList: newList}
        case CLEAR:
            return { ...state, itemsList:[] }
        default:
            return { ...state }
    }
}