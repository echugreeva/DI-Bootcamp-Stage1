import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"




const Task  = (props)=> {
    console.log(props.members)




    return (
    <div>
        <p>{props.data.desciption}</p>
        <p>Due date: {props.data.duedate}</p>
        <p>Assignee: {props.data.assignee_id}</p>
        <FormControl medium='true'>
            <InputLabel id="assignee">Status</InputLabel>
            <Select
                // defaultValue={props.data.assignee_id || 'nobody'}
                labelId="assignee"
                id="assignee"
                value={props.data.assignee_id||''}
                label="assignee"
                // onChange={handleChange}
            >
                <MenuItem value={props.data.assignee_id || ''}>{props.data.assignee_id}</MenuItem>
               
                { 
                    props.members.map((item,i)=>{
                        return (
                            <MenuItem key = {i} value={item.email}>{item.email}</MenuItem>
                        )
                        
                    })
                }
    
            </Select>
        </FormControl>

        <p>Status: {props.data.status}</p>

        <FormControl  medium='true'>
            <InputLabel id="taskStatus">Status</InputLabel>
            <Select
                labelId="select-label"
                id="select"
                value={props.data.status}
                label="taskStatus"
                // onChange={handleChange}
            >
                {/* <MenuItem value={props.data.status}>{props.data.status}</MenuItem> */}
                <MenuItem value={'to do'}>To Do</MenuItem>
                <MenuItem value={'in process'}>In process</MenuItem>
                <MenuItem value={'done'}>Done</MenuItem>
            </Select>
        </FormControl>

        <p>Time to complete: {props.data.completion_time}</p>
    </div>
    )
}

export default Task