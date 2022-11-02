import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Moviepage =(props)=>{

    const navigate = useNavigate();
    const link = `https://www.imdb.com/title/${props.movieData.imdbID}/`

    return (
    <div className="container">
        <div className="row">
            <div className="col-md-4 card card-body">
                <img src={props.movieData.Poster} className="thumbnail" alt="Poster" />
            </div>
            <div>
                <h1>{props.movieData.Title}</h1>
                <p>Genre: {props.movieData.Genre}</p>
                <p>Released: {props.movieData.Released}</p>
                <p>Rated: {props.movieData.Rated}</p>
                {/* <p>IMDB Rating: {props.movieData.Rating[0].Value}</p> */}
                <p>Director: {props.movieData.Director}</p>
                <p>Writer: {props.movieData.Writer}</p>
                <p>Actors: {props.movieData.Actors}</p>
            </div>
    
            <div className="card card-body bg-dark my-5 text-light">
                <div className="col-md-12">
                    <h3>About</h3>
                    <p>{props.movieData.Plot}</p>
                    <a
                            href={'https://www.imdb.com/title/' + props.movieData.imdbID}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary w50"
                        >View on IMDB </a>
                    <button className="btn btn-default text-light" onClick={()=>{navigate('/')}}>Go Back To Search</button>
                </div>
            
            </div>
        </div>
       
    
    </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        movieData: state.movieData || {}
  
    }
  }
  
//   const mapDispatchToProps = (dispatch)=> {
//     return {
//         getMovieData: (id)=>(getMovieData(dispatch,id))
//     }
//   }

export default connect(mapStateToProps)(Moviepage)