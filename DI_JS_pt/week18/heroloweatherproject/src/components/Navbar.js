import {Link} from 'react-router-dom'
const Navbar =(props)=>{
    return(
        <div className='db dt-l w-100 border-box pa3 ph5-l white bg-silver'>
            <h1 className='db dtc-l v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l'>AmazingWeatherApp</h1>
            <div>
               
                    <Link className = 'f3 link dib white dim mr3 mr4-ns'  to='/'>Home</Link>
                
               
                    <Link className = 'f3 link dib white dim mr3 mr4-ns' to='/favorites'>Favorites</Link>
                 
                
            </div>
        </div>
    )
}

export default Navbar