import {useState, useEffect,useContext} from 'react'
import { AppContext } from '../App';
import Task from './Task'

const TaskList = (props) => {
    const {tLId}=useContext(AppContext)
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
    
    if(tasks.length < 1) {
        return (
            <div>hello</div>
        )
    } else {
        return (

            <>
            {
                
                tasks.map((item, i)=>{
                    return (
                        <>
                        <Task key={i} data={item}/>
                        <p>{item.description}</p>
                        </>
                        
                    )
                    
                    
                })
            }
            </>
        )
    }
    
}

export default TaskList