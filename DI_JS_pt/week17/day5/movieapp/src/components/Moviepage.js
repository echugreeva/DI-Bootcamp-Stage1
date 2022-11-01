import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Moviepage =(props)=>{

    const navigate = useNavigate();
    const link = `https://www.imdb.com/title/${props.movieData.imdbID}/`

    return (
    <>
    <h1>{props.movieData.Title}</h1>
    <p>Genre: {props.movieData.Genre}</p>
    <p>Released: {props.movieData.Released}</p>
    <p>Rated: {props.movieData.Rated}</p>
    {/* <p>IMDB Rating: {props.movieData.Rating[0].Value}</p> */}
    <p>Director: {props.movieData.Director}</p>
    <p>Writer: {props.movieData.Writer}</p>
    <p>Actors: {props.movieData.Actors}</p>
    <div>
        <h5>About</h5>
        <p>{props.movieData.Plot}</p>
        <a
                href={'https://www.imdb.com/title/' + props.movieData.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >View on IMDB </a>
        <button onClick={()=>{navigate('/')}}>Go Back To Search</button>
    </div>
    
    </>
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