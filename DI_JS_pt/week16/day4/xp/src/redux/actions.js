export const submit = (obj) => {
    console.log(obj)
    return {
        type: 'SUBMIT',
        payload: obj
    }
}

export const edit = (obj, id) => {
    console.log(obj)
    return {
        type: 'EDIT',
        payload: obj,
        payload2: id
    }
}

//obj pastes data to form


export const del = (id) => {
    console.log(id)
    return {
        type: 'DELETE',
        payload: id
    }
}