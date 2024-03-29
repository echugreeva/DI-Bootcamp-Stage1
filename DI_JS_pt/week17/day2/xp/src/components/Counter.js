import {connect} from 'react-redux'
import {plus, minus, incrIfOdd, incrDelay} from '../redux/action'
const Counter = (props)=> {
   
    return (
        <>
        <p>{props.num}</p>
        <button onClick={props.plus}>+</button>
        <button onClick={props.minus}>-</button>
        <button onClick={props.incrIfOdd}>Increment if odd</button>
        <button onClick={props.incrDelay}>Increment async</button>
        </>



    )
}

const mapStateToProps = (state)=> {
    return {
        num: state.num,
        
    }
    
}
const mapDispatchToProps = (dispatch)=> {
    return {
        plus: ()=>dispatch(plus()),
        minus: ()=>dispatch(minus()),
        incrIfOdd: ()=>dispatch(incrIfOdd()),
        incrDelay: ()=>dispatch(incrDelay()),


    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Counter)