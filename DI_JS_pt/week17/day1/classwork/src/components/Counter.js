import {connect} from 'react-redux'
import {plus, minus, getRobots} from '../redux/action'
const Counter = (props)=> {
    // const get = () => {
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //                 .then(response => response.json())
    //                 .then((response) => {
    //                     console.log(response)
    //                     props.getRobots(response)
    //                 })
    //                 .catch(err => console.error(err))
    // }
    return (
        <>
        <button onClick={props.plus}>+</button>
        <p>{props.num}</p>
        <button onClick={props.minus}>-</button>
        <button onClick={()=>{props.getRobots()}}>get robots</button>
        <div>{
            props.robots.map((item, i) => {
                return (
                    <p>{item.name}</p>
                )
            })
        }
        </div>
        </>



    )
}

const mapStateToProps = (state)=> {
    return {
        num: state.reducer.num,
        robots: state.robot_reducer.robots
    }
    
}
const mapDispatchToProps = (dispatch)=> {
    return {
        plus: ()=>dispatch(plus()),
        minus: ()=>dispatch(minus()),
        getRobots: ()=>dispatch(getRobots())


    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Counter)