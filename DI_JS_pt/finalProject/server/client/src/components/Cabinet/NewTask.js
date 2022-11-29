import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const NewTask = (props)=> {
    const [dDateTask, setDateTask] = useState(new Date())
    return (
        <div>
            <Box component={'form'} sx={{m:1}} noValidate autoComplete={'off'}>
                <TextField
                sx={{m:1}}
                id='description'
                label = 'description'
                variant = 'outlined'
                // onChange={(e)=>{setEmail(e.target.value)}}
                />
                <TextField
                sx={{m:1}}
                id='completion_time'
                label = 'completion_time'
                variant = 'outlined'
                type='number'
                // onChange={(e)=>{setEmail(e.target.value)}}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                            label="Date desktop"
                            inputFormat="MM/DD/YYYY"
                            value={dDateTask}
                            onChange={(newValue) => {
                                setDateTask(newValue);
                              }}
                            renderInput={
                                (params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
               
                <Button variant = 'contained'>Delete</Button>
                <Button variant = 'contained'>Add</Button>
            </Box>
            
            
            
        </div>
    )
}

export default NewTask