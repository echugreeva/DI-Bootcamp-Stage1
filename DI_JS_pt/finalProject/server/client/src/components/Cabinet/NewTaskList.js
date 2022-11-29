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
 
const NewTaskList = (props)=>{
    console.log(props.myTeams)
    const [dDate, setDate] = useState(new Date())
    // const [numTasks, addNum] = useState(1);
    const addTask = () => {
        return (<NewTask/>)
    }
    return (
        <Box component={'form'} sx={{m:1}} noValidate autoComplete={'off'}>
            <InputLabel id="teamId">List Name</InputLabel>
            <TextField
                sx={{m:1}}
                id='listName'
                label = 'List Name'
                variant = 'outlined'
                // onChange={(e)=>{setEmail(e.target.value)}}
                />
        <FormControl medium='true'>
            <InputLabel id="teamId">Team</InputLabel>
            <Select
                labelId="teamId"
                id="teamId"
                value={props.myTeams[0].team_id||''}
                label="teamId"
                // onChange={handleAssignee}
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
                        value={dDate}
                        onChange={(newValue) => {
                            setDate(newValue);
                          }}
                        renderInput={
                            (params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            
            <Button variant = 'contained' onClick={addTask}>Add Task</Button>
            
        </FormControl>
        <NewTask/>
        {/* <Task data={}/> */}
        <Button variant = 'contained'>Publish</Button>
        </Box>
    )
}

export default NewTaskList