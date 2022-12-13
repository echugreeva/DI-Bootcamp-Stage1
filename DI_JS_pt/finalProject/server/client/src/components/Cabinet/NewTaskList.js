import NewTask from "./NewTask"
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Task } from '../Task'
import axios from 'axios'
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid'
import GridItem from '@mui/material/Grid'

const NewTaskList = (props) => {
    // console.log(props.myTeams)
    const [duedate, setDate] = useState(new Date())
    const [team_id, setPickedTeam] = useState(props.myTeams[0].team_id || '')
    // const [team_id, setPickedTeam] = useState('')
    const [list_name, setName] = useState('')
    const [list_id, setListId] = useState('')
    const [addTaskShown, setTaskShown] = useState(false);

    const addTaskList = async () => {
        try {
            const response = await axios.post(`/addlist/`, {
                team_id, list_name, duedate
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            setListId(response.data[0].tl_id)

        } catch (e) {
            console.log(e.response.data.msg)
        }
        console.log(list_id)
    }
    const handleClick = event => {

        setTaskShown(true);

    };

    return (
        <Grid  container
        direction="column"
        justifyContent="center"
        alignItems="center" >
             <Typography variant="h5" component="h1">Add new task list</Typography>
            <Box component={'form'} sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start' 
            
          }} noValidate autoComplete={'off'}>
           

            {/* <InputLabel id="teamId">List Name</InputLabel> */}
            <TextField
                sx={{ m: 1 }}
                
                id='listName'
                label='List Name'
                variant='outlined'
                onChange={(e) => { setName(e.target.value) }}
                value={list_name}
            />
            <FormControl medium='true'>
                <InputLabel id="teamId">Team</InputLabel>
                <Select

                    labelId="teamId"
                    id="teamId"
                    value={team_id}
                    label="teamId"
                    onChange={(e) => { setPickedTeam(e.target.value) }}
                    sx={{ m: 1 }
                }
                >

                    {
                        props.myTeams.map((item, i) => {
                            return (
                                <MenuItem key={i} value={item.team_id}>{item.team_id}</MenuItem>
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
                            sx={{ m: 1 }}
                    />
                </LocalizationProvider>

                <Button sx={{ m: 1 }} variant='contained' onClick={() => {
                    addTaskList()
                    handleClick()
                }
                }>Start adding tasks</Button>

            </FormControl>
            {
                addTaskShown && < NewTask tl_id={list_id}/>
            }

            {/* <Button variant = 'contained'>Publish</Button> */}
        </Box>
        </Grid>
        
    )
}

export default NewTaskList