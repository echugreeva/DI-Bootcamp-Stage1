import {Link, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import axios from 'axios';
// import {useContext} from 'react'
// import { AppContext } from '../App';


const Navbar = (props) => {
    
    const navigate = useNavigate()
    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button component={Link} to='/'>Home</Button>
                <Button component={Link} to='/login'>Login</Button>
                <Button component={Link} to='/team'>Team</Button>
                <Button component={Link} to='/mycabinet'>My Cabinet</Button>
                <Button component={Link} to='/register'>Register</Button>
            </Stack>
        </div>
    )

}

export default Navbar