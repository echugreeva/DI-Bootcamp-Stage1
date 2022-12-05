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
 
const NewTeam = (props)=>{
    const {userId} = useContext(AppContext);
    const [team_id, setTeamId] = useState('');
    const [name, setTeamName] = useState('');

    const addTeam = async() => {
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
        
    }
    console.log(team_id);
    console.log(name);

    return (
        <Box component={'form'} sx={{m:1}} noValidate autoComplete={'off'}>
            <InputLabel id="teamId">Team Name</InputLabel>
            <TextField
                sx={{m:1}}
                id='teamName'
                label = 'Team Name'
                variant = 'outlined'
                onChange={(e)=>{setTeamName(e.target.value)}}
                value={name}
                />
        
            
            
            <Button variant = 'contained' onClick={addTeam}>Add users</Button>
            <AddUserToTeam team_id={team_id} team_name={name} admin_id={userId}/>
       
        </Box>
    )
}

export default NewTeam