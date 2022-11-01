import {connect} from 'react-redux'
import { getMovieData } from '../redux/actions'
import { useNavigate } from 'react-router-dom'

const Card = (props)=> {
    const navigate = useNavigate();
    const {data}=props
    console.log(data.imdbID)
    return(
        <div key={data.imdbId}>
            <img src={data.Poster}/>
            <h4>{data.Title}</h4>
            <button onClick={()=>{
                props.getMovieData(data.imdbID);
                navigate(`/movie/${data.imdbID}`)
                }}>More Details</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        input: state.input || ''
  
    }
  }
  
  const mapDispatchToProps = (dispatch)=> {
    return {
        getMovieData: (id)=>(getMovieData(dispatch,id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Card)