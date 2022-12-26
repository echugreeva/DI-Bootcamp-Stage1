import {useReducer, useRef, useEffect} from 'react';

const initState = {
    result: 0
}

export const reducer = (state, action)=> {
    switch(action.type) {
        case 'PLUS':
            return {...state, result: state.result+1}

        case 'MINUS':
            return {...state, result: state.result-1} 
        case 'DIVIDE':
            return {...state, result: state.result/2}
        case 'MULTIPLY':
            return {...state, result: state.result*2}
    default:
        return {...state}

    }
}



const Calculator = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const myInput = useRef()
    useEffect(()=>{
        console.log(myInput.current)
},[])
    
    return (
        <>
            <input type="text" name='simple' ref={myInput}/>
            <h2>Simple Calculator</h2>
            Result: {state.result}
            <button onClick={()=>dispatch({type:'PLUS'})}>Plus 1</button>
            <button onClick={()=>dispatch({type:'MINUS'})}>Minus 1</button>
            <button onClick={()=>dispatch({type:'DIVIDE'})}>Divide by 2</button>
            <button onClick={()=>dispatch({type:'MULTIPLY'})}>Multiply by 2</button>
        </>
    )

}

export default Calculator