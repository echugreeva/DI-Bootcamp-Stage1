import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import {useState} from 'react'
import axios from 'axios';



const Task  = (props)=> {
    const [taskS, setStatus] = useState(props.data.status || '');
    const [assignee, setAssignee] = useState(props.data.assignee_id ||'');
    const [msg, setMsg] = useState('');
    // console.log(props.members)

    let handleStatus = async(event)=> {
        let taskId = props.data.task_id

        let taskStatus = event.target.value;
        try{
            const response = await axios.post('/task/status', {
                taskId, taskStatus
            }, {
                withCredentials:true, 
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
        }catch (e){
            setMsg(e.response.data.msg)
        }
        setStatus(event.target.value);
          
    }

    let handleAssignee = async(event)=> {
        let taskId = props.data.task_id;
        let assigneeId = event.target.value;
        try{
            const response = await axios.post('/task/assignee', {
                taskId, assigneeId
            }, {
                withCredentials:true, 
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
        }catch (e){
            setMsg(e.response.data.msg)
        }
        setAssignee(event.target.value);

          
    }


    return (
    <div>
        <p>{props.data.desciption}</p>
        <p>Due date: {props.data.duedate}</p>
        <p>Assignee: {props.data.assignee_id}</p>
        <FormControl medium='true'>
            <InputLabel id="assignee">Assignee</InputLabel>
            <Select
                
                labelId="assignee"
                id="assignee"
                value={assignee}
                label="assignee"
                onChange={handleAssignee}
            >
                
               
                { 
                    props.members.map((item,i)=>{
                        return (
                            <MenuItem key = {i} value={item.id}>{item.id}</MenuItem>
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
                value={taskS}
                label="taskStatus"
                onChange={handleStatus}
            >
        
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