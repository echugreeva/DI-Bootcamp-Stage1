import {connect} from 'react-redux'
const Header =(props)=>{
    return (
    <div className="navbar navbar-light bg-dark mb-5">
        <h1 className="navbar-brand text-white text-lg brand-text">MovieSearchInfo</h1>
        <div>
            <img class="img-thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/192px-IMDb_Logo_Square.svg.png?2020218171646"/>
            <img class="img-thumbnail" src="https://cdn.iconscout.com/icon/free/png-128/react-1-282599.png"/>
        </div>
    </div>
    )
    
}



export default Header