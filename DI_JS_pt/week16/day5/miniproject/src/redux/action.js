export const searchSubmit = (obj) => {
    return {
        type: 'SUBMIT',
        payload: obj
    }
        
}

export const searchInput = (txt) => {
    return {
        type: 'INPUT',
        payload: txt
    }
}