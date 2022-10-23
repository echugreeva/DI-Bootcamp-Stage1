import {connect} from 'react-redux'
import { showDetail } from '../redux/actions'

const MovieList = (props)=> {
    return (
        <div>
            <h1>MovieList</h1>
            {
                props.list.map((item, i) => {
                    return (
                        <div key = {i}>
                            {item.title}
                            <button onClick={()=>{props.showDet(item)}}>details</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.movieList
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        showDet: (movie) => dispatch(showDetail(movie))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)