import {ADD_REMINDER, DELETE, CLEAR} from './constants'

export const addReminder = (txt) => {
    return {
        type: ADD_REMINDER,
        payload: txt
    }
        
}

export const delReminder = (id) => {
    return {
        type: DELETE,
        payload: id
    }
        
}

export const clear = () => {
    return {
        type: DELETE
    }
        
}