import {Link} from 'react-router-dom'
const Navbar =(props)=>{
    return(
        <div>
            <h1>AmazingWeatherApp</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/favorites'>Favorites</Link>
            </div>
        </div>
    )
}

export default Navbar