
export const INSERT  = 'INSERT';
export const UPT_IND  = 'UPT_IN';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE'

export const insertTrx = (trx)=> {
    return {
        type:INSERT,
        payload: trx
    }
        
}

export  const update_trx = (trx) => {
    return {
        type:UPDATE,
        payload: trx
    }
        
}

export  const delete_trx = (ind) => {
    return {
        type: DELETE,
        payload: ind
    }
        
}

export  const update_ind = (ind) => {
    return {
        type:UPT_IND,
        payload: ind
    }
        
}