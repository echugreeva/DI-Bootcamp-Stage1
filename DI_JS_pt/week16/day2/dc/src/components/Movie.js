import {connect} from 'react-redux'

const Movie = (props) => {
    
        return (
            <div style={{display: 'inline-block', width: '50% '}}>
                <h1>Movie Details</h1>
                <h2>Title: {props.d.title&&props.d.title}</h2>
                <h4>Release Date: {props.d.releaseDate&&props.d.releaseDate}</h4>
                <h4>Rating: {props.d.rating&&props.d.rating}</h4>
            </div>
        )
    
}

const mapStateToProps = (state)=> {
    return {
        d: state.detail
    }
}

export default connect(mapStateToProps)(Movie)