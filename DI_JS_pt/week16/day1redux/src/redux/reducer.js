const initState={
    prop_1:'one from store',
    prop_2:'two from store', 
    text:'blabla'
}

export const reducer_a = (state=initState, action={}) =>{
    switch (action.type) {
        case 'CHANGE_PROP_ONE':
            return {...state, prop_1:action.payload}
        default:
            return {...state}
    }
    
}