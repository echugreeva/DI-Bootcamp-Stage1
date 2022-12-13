import Box from '@mui/material/Box'
import {useNavigate, Link} from 'react-router-dom';

const Welcome = (props)=> {
    return (
        <Box>
            <h1>Welcome to “Teamwork makes the dream work”</h1>
            <p>to continue your journey <Link to='/register'>Register</Link> or <Link to='/login'>Login</Link></p>
        </Box>
    )
}

export default Welcome