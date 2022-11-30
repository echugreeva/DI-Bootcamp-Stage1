import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const NewTask = (props)=> {
    const [inputList, setInputList] = useState([{description:'',completion_time:'', dueDate: new Date()}])
    const [dDateTask, setDateTask] = useState(new Date())
    const handleInput = (event,i) => {
        const {value, id} = event.target;
        console.log(event.target.id)
        console.log(value)
        const list = [...inputList];
        list[i].id = event.target.value;
        setInputList(list)
    }
    const handleDateInput = (value, i) => {
        const list = [...inputList];
        list[i].dueDate = value;
        setInputList(list)
    }
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", lastName: "" }]);
      };
    return (
        <div>
            <h2>Add your tasks</h2>
            <Box component={'form'} sx={{m:1}} noValidate autoComplete={'off'}>
            {
                inputList.map((item,i)=>{
                    return (
                        <>
                        <TextField
                        sx={{m:1}}
                        id='description'
                        label = 'description'
                        variant = 'outlined'
                        value={item.description}
                        onChange={(e)=>{handleInput(e,i)}}
                        />
                        <TextField
                            sx={{m:1}}
                            id='completion_time'
                            label = 'completion_time'
                            variant = 'outlined'
                            type='number'
                            value={item.completion_time}
                            onChange={(e)=>{handleInput(e,i)}}
                            name ='completion_time'
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                    id="dueDate"
                                    label="dueDate"
                                    name ='dueDate'
                                    inputFormat="MM/DD/YYYY"
                                    value={dDateTask}
                                    onChange={(newValue) => {
                                        setDateTask(newValue);
                                        handleDateInput(newValue,i)

                                      }}
                                    renderInput={
                                        (params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <div>
                        {inputList.length !== 1 && <Button variant = 'contained'>Remove</Button>}
                        {inputList.length - 1 === i && <Button variant = 'contained' onClick={handleAddClick}>Add</Button>}
                        </div>
                        </>
                    )
                })
            }
            </Box>
            {/* <Box component={'form'} sx={{m:1}} noValidate autoComplete={'off'}>
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
                            label="dueDate"
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
            </Box> */}
            
            
            
        </div>
    )
}

export default NewTask