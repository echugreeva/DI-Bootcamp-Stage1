import {connect} from 'react-redux'
import { searchFieldChange,getMovies } from '../redux/actions'
const Search =(props) => {
    return (
        <>
            <h1> Search for a movie ,TV series ..</h1>
            <input type="text" onChange={(e)=>{props.searchFieldChng(e.target.value)}}/>
            <button onClick={()=>{props.getMovies(props.input)}}>Search</button>
        </>
        
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