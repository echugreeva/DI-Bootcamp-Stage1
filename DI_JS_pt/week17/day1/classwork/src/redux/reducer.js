// import {plus, minus, getRobots} from './action'
import {combineReducers} from 'redux';
const initState={
    num:0,
    robots:[]
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


export const robot_reducer = (state = initState, action={}) => {


    switch (action.type) {

        case 'GET':
            return {...state, robots: action.payload}
            
        default:
            return {...state}
    }
}

const root_reducer = combineReducers({
    robot_reducer,
    reducer

})

export default root_reducer