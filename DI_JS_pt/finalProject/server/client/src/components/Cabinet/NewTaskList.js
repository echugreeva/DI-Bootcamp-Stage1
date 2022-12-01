import NewTask from "./NewTask"
import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {Task} from '../Task'
import axios from 'axios'
 
const NewTaskList = (props)=>{
    console.log(props.myTeams)
    const [duedate, setDate] = useState(new Date())
    const [team_id, setPickedTeam] = useState(props.myTeams[0].team_id||'')
    const [list_name, setName] = useState('')
    const [list_id, setListId] = useState('')
    const addTaskList = async() => {
        try{
            const response = await axios.post(`/addlist/`, {
                team_id, list_name, duedate
            }, {
                withCredentials:true, 
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            setListId(response.data[0].tl_id)
            
        }catch (e){
            console.log(e.response.data.msg)
        }
        console.log(list_id)
    }
    // const [numTasks, addNum] = useState(1);

    return (
        <Box component={'form'} sx={{m:1}} noValidate autoComplete={'off'}>
            <InputLabel id="teamId">List Name</InputLabel>
            <TextField
                sx={{m:1}}
                id='listName'
                label = 'List Name'
                variant = 'outlined'
                onChange={(e)=>{setName(e.target.value)}}
                value={list_name}
                />
        <FormControl medium='true'>
            <InputLabel id="teamId">Team</InputLabel>
            <Select
                labelId="teamId"
                id="teamId"
                value={props.myTeams[0].team_id||''}
                label="teamId"
                onChange={(e)=>{setPickedTeam(e.target.value)}}
            >
               
                { 
                    props.myTeams.map((item,i)=>{
                        return (
                            <MenuItem key = {i} value={item.team_id}>{item.team_id}</MenuItem>
                        )
                        
                    })
                }
    
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            
                <DatePicker
                        label="Due date"
                        inputFormat="MM/DD/YYYY"
                        value={duedate}
                        onChange={(newValue) => {
                            setDate(newValue);
                          }}
                        renderInput={
                            (params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            
            <Button variant = 'contained' onClick={addTaskList}>Start adding tasks</Button>
            
        </FormControl>
        <NewTask tl_id={list_id}/>
        {/* <Button variant = 'contained'>Publish</Button> */}
        </Box>
    )
}

export default NewTaskList