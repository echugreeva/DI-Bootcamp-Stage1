import {useState, useEffect, useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// import { AppContext } from '../App';


const LogReg = (props)=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFName]= useState('');
    const [lname, setLName]= useState('');
    const [msg, setMsg]= useState('');

    // const {setAccessToken} = useContext(AppContext);

    const navigate = useNavigate();

    const handleClick = async()=> {
        if(props.title =='Register') {
            try{
                const response = await axios.post('/register', {
                    email, password
                }, {
                    withCredentials:true, 
                    headers:{
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response);
                // navigate('/login');
            }catch (e){
                setMsg(e.response.data.msg)
            }
        }else{
            try{
                const response = await axios.post('/login', {
                    email, password
                }, {
                    withCredentials:true, 
                    headers:{
                        'Content-Type': 'application/json'
                    }
                });
                // console.log(response.data.token)
                if(response.status==200){
                    // setAccessToken(response.data.token);
                    // setMsg('');
                    // navigate('/');
                    console.log(`login & pass matched`)
                }
                
            }catch (e){
                setMsg(e.response.data.msg)
            }
        }

}   


return(
        <div>
            <div>
                <h3>{props.title}</h3>
            </div>
            <Box component={'form'} sx={{m:1}} noValidate autoComplete={'off'}>
                {/* <TextField
                    sx={{m:1}}
                    id='fname'
                    label = 'Enter First Name'
                    variant = 'outlined'
                    onChange={(e)=>{setFName(e.target.value)}}
                />
                <TextField
                    sx={{m:1}}
                    id='lname'
                    label = 'Enter Last Name'
                    variant = 'outlined'
                    onChange={(e)=>{setLName(e.target.value)}}
                /> */}

                <TextField
                sx={{m:1}}
                id='email'
                label = 'Enter email'
                variant = 'outlined'
                onChange={(e)=>{setEmail(e.target.value)}}
                />
                <TextField
                sx={{m:1}}
                id='password'
                label = 'Enter password'
                variant = 'outlined'
                onChange={(e)=>{setPassword(e.target.value)}}
                />
            </Box>
            <Button variant = 'contained' onClick={handleClick}>{props.title}</Button>
            <div>
                <p>{msg}</p>
            </div>
        </div>
    )

}

export default LogReg