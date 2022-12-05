import {useState, useEffect,useContext} from 'react'
import { AppContext } from '../App';
import Task from './Task'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

const TaskList = (props) => {
    const {tLId,teamId}=useContext(AppContext)
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        fetch (`/tasks/${tLId}`)
        .then(res=>{
            if(res.status == 200) {
                return res.json()
            }
        }
            )
        .then(data=>
            setTasks(data)
            // console.log(data)
            )
        .catch(e=>{console.log(e)})
    },[])

    const [assi, setAssi] = useState([]);

    useEffect(()=>{
        fetch (`/teams/${teamId}`)
        .then(res=>{
            if(res.status == 200) {
                return res.json()
            }
        }
            )
        .then(res=>{
            // setAssi(res)
            console.log(res);
            setAssi(res);
            // console.log(members)
        }
           
            )
        .catch(e=>{console.log(e)})
    },[])
    
    if(tasks.length<1) {
        return (
            <div>checking tasks</div>
        )
    } else {
        return (

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Assignee</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Time To Complete</TableCell>
                        <TableCell>Due Date</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                {
                
                tasks.map((item, i)=>{
                    return (
                       
                            <Task key={i} data={item} members={assi}/>
                 
                       
                        
                    )
                    
                    
                })
            }
                </TableBody>
            
            </Table>
        )
    }
    
}

export default TaskList