import {submit, edit, del} from './actions'

const initState = {
    transactionList: [],
    transaction:{},
    toUpdate:{}
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case 'SUBMIT':
        return  {...state, transactionList: [...state.transactionList, action.payload ]}
   
        case 'EDIT':
        let updateList = [...state.transactionList];
        console.log(state.transactionList[0].one);
        console.log(action.payload2);
        console.log(action.payload);
        document.querySelector('#one').value = action.payload2.one
        document.querySelector('#two').value = action.payload2.two
        document.querySelector('#three').value = action.payload2.three
        document.querySelector('#four').value = action.payload2.four
        updateList.splice(action.payload,1);
        return  {...state, transactionList: updateList }
        
   
        case 'DELETE':
        let newList = [...state.transactionList]
        newList.splice(action.payload,1);
        return  {...state, transactionList:newList}
    
    default:
    return {...state}
    }
}
