import {connect} from 'react-redux'
import { searchFieldChange,getMovies } from '../redux/actions'
const Search =(props) => {
    return (
        <div className="jumbotron jumbotron-fluid mt-5 text-center" >
            <div className="container"> 
                <h1> Search for a movie ,TV series ..</h1>
                <input className="form-control" type="text" onChange={(e)=>{props.searchFieldChng(e.target.value)}}/>
                <button className="btn btn-primary btn-bg mt-3" onClick={()=>{props.getMovies(props.input)}}>Search</button>
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
      searchFieldChng: (txt) => dispatch(searchFieldChange(txt)),
      getMovies: (txt)=>(getMovies(dispatch,txt))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Search)