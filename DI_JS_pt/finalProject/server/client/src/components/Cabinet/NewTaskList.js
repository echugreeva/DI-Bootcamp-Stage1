import NewTask from "./NewTask"
import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
 
const NewTaskList = (props)=>{
    // const [numTasks, addNum] = useState(1);
    const today = new Date();
    const addTask = () => {
        return (<NewTask/>)
    }
    return (
        <Box component={'form'} sx={{m:1}} noValidate autoComplete={'off'}>
            <TextField
                sx={{m:1}}
                id='listName'
                label = 'listName'
                variant = 'outlined'
                // onChange={(e)=>{setEmail(e.target.value)}}
                />
        <FormControl medium='true'>
            <InputLabel id="assignee">Assignee</InputLabel>
            <Select
                labelId="assignee"
                id="assignee"
                value={props.myTeams[0]||''}
                label="assignee"
                // onChange={handleAssignee}
            >
               
                { 
                    props.myTeams.map((item,i)=>{
                        return (
                            <MenuItem key = {i} value={item.id}>{item.id}</MenuItem>
                        )
                        
                    })
                }
    
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                        label="Date desktop"
                        inputFormat="MM/DD/YYYY"
                        value={today}
                        // onChange={handleChange}
                        renderInput={
                            (params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            
            <Button variant = 'contained' onClick={addTask}>Add Task</Button>
            
        </FormControl>
        <NewTask/>
        <Button variant = 'contained'>Publish</Button>
        </Box>
    )
}

export default NewTaskList