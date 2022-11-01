const initState = {
    txt:'adghfkh'
}

export const reducer = (state=initState,action={})=>{
    switch (action.type) {
        case 'CHNG_TXT':
            return {...state, txt: action.payload}
        default:
            return {...state}
    }
}