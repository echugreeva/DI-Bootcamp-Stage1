import {connect} from 'react-redux';
import {plus, minus} from '../actions/index';

const Counter = (props) => {
    return (
        <div>
            <button onClick={props.handlePlus}>+</button>
            <p>{props.c}</p>
            <button onClick={props.handleMinus}>-</button>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        c:state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch(plus()),
        handleMinus: () => dispatch(minus())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)