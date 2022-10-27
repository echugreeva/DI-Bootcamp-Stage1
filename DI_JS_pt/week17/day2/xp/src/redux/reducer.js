import {plus, minus,incrIfOdd, incrDelay} from './action'
// import {reducer} from 'redux';
const initState={
    num:0,
    
}

export const reducer = (state = initState, action={}) => {


    switch (action.type) {
        case 'PLUS':
            return {...state, num: state.num + 1}
           
        case 'MINUS':
            return {...state, num: state.num - 1}

            
        default:
            return {...state}
    }
}




export default reducer