import {connect} from 'react-redux'
import Card from './Card'
const CardList = (props)=> {
    return(
        <div>
            {
            props.movieList.map(item=>{
                return(
                    <Card key={item.imdbID} data={item}/>
                )
                
            })
            }
        </div>
        
        
    )
}

const mapStateToProps = (state) => {
    return {
        movieList: state.movieList || []
  
    }
  }

export default connect(mapStateToProps)(CardList)