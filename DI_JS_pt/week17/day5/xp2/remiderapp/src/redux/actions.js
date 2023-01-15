import {ADD_REMINDER, DELETE, CLEAR} from './constants'

export const addReminder = (txt, dueDate) => {
    return {
        type: ADD_REMINDER,
        payload: txt,
        payload2: dueDate
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
        type: CLEAR
    }
        
}