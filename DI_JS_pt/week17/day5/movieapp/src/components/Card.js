import {connect} from 'react-redux'
import { getMovieData } from '../redux/actions'
import { useNavigate } from 'react-router-dom'

const Card = (props)=> {
    const navigate = useNavigate();
    const {data}=props
    console.log(data.imdbID)
    return(
        <div className="col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100" key={data.imdbId}>
                <img className="w-100 mb-2" src={data.Poster}/>
                <h4 className="text-light card-title">{data.Title}</h4>
                <button className="btn btn-primary" onClick={()=>{
                    props.getMovieData(data.imdbID);
                    navigate(`/movie/${data.imdbID}`)
                    }}>More Details</button>
            </div>
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