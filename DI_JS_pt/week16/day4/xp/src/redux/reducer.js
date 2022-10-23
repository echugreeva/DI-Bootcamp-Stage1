import {submit, edit, del} from './actions'

const initState = {
    transactionList: [],
    transaction:{},
    update:{}
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case 'SUBMIT':
        return  {...state, transactionList: [...state.transactionList, action.payload ]}
   
        case 'EDIT':
        const updateList = [...state.transactionList];
        updateList = updateList.splice(action.payload2,1,action.payload);
        return  {...state, update: action.payload,transactionList:updateList }
        //? get key of element and replace it by key
        
   
        case 'DELETE':
        let newList = [...state.transactionList]
        newList.splice(action.payload,1);
        return  {...state, transactionList:newList}
    
    default:
    return {...state}
    }
}
