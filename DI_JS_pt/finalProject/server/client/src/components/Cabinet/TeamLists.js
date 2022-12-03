
import { useEffect, useState } from "react"
import TaskList from "../TaskList"
import NewTaskList from "./NewTaskList"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TeamLists = (props)=> {
    console.log(props.myTeams)
    const [tl, setTL] = useState([])
    useEffect(()=>{
        fetch (`/teamlists/${props.teamId}`)
        .then(res=>{
            if(res.status == 200) {
                return res.json()
            }
        }
            )
        .then(data=>
            setTL(data)
            // console.log(data)
            )
        .catch(e=>{console.log(e)})
    },[]
    )
    if (!tl) {
        return (
            <>
                <div>this team has no task lists</div>
                <button>add new list</button>
            </>
            
        )
    }else {
        return (
            <div>
                {
                    tl.map((item, i)=> {
                        return (
                            <div key={i}>
                                {item.list_name}
                                {item.duedate}
                            
                                
                                <TaskList/>
                                
                                

                            </div>
                        )
                    })
                }
                <button>add new list</button>
                <NewTaskList myTeams={props.myTeams}/>
            </div>
        )
    }

}

export default TeamLists