//add name -> fetch post name & his id, as admin and user then team id comes back second fetch with email of a memeber 
// if email exist in db add user if not, send message ask user to reg in the app


import {useState, useContext} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AppContext } from '../../App';
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import AddUserToTeam from './AddUserToTeam'
import axios from 'axios'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
 
const NewTeam = (props)=>{
    const {userId} = useContext(AppContext);
    const [team_id, setTeamId] = useState('');
    const [name, setTeamName] = useState('');
    const [addUserShown, setShown]= useState(false);
    const [msg, setMsg]=useState('')

    const handleClick = event => {
        
        setShown(true);
    
      };

    const addTeam = async() => {
        if (name) {
            try{
                const response = await axios.post(`/addteam/`, {
                    userId, name
                }, {
                    withCredentials:true, 
                    headers:{
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response);
                setTeamId(response.data[0].team_id)
                
            }catch (e){
                console.log(e.response.data.msg)
            }
        } else {
            setMsg('please add team name first')
        }
        
        
    }
    console.log(team_id);
    console.log(name);

    return (
        <Box 
        component={'form'} 
        noValidate 
        autoComplete={'off'}
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <InputLabel id="teamId">Team Name</InputLabel>
            <TextField
                sx={{m:1}}
                id='teamName'
                label = 'Team Name'
                variant = 'outlined'
                onChange={(e)=>{setTeamName(e.target.value)}}
                value={name}
                />
        
            
            {
                <Button variant = 'contained' onClick={()=>{
    
                    addTeam()
                    handleClick()
                    }}>Add users</Button>
            }
            
            {
               addUserShown&& <AddUserToTeam team_id={team_id} team_name={name} admin_id={userId}/>
            }
            
       
        </Box>
    )
}

export default NewTeam