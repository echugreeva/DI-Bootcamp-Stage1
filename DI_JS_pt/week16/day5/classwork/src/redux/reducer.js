import { INSERT, UPT_IND, UPDATE, DELETE} from "./actions";
import { addToLocalStorage, getFromLocalStorage } from "../helpers/storage";


const initState ={
    curIndex: -1,
    list:getFromLocalStorage('transactions')
}


export const reducer = (state=initState, action={})=> {
    switch(action.type){
        case INSERT:
            state.list.push(action.payload)
            addToLocalStorage('transactions', [...state.list])
            return {...state, list: [...state.list], curIndex: -1};
        case UPT_IND:
            return {...state, curIndex:action.payload};
        case UPDATE:
            state.list[state.curIndex]=action.payload
            addToLocalStorage('transactions', [...state.list])
            return {...state, list: [...state.list], curIndex: -1};
        case DELETE:
            state.list.splice(action.payload,1)
            addToLocalStorage('transactions', [...state.list])
            return {...state, list: [...state.list], curIndex: -1};
            
        default:
            return {...state};
    }

    
}