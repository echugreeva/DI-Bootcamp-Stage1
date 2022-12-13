
import { useEffect, useState } from "react"
import TaskList from "../TaskList"
import NewTaskList from "./NewTaskList"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button'

const TeamLists = (props) => {
    console.log(props.myTeams)
    const [tl, setTL] = useState([])
    useEffect(() => {
        if (props.teamId > 0) {
            fetch(`/teamlists/${props.teamId}`)
                .then(res => {
                    if (res.status == 200) {
                        return res.json()
                    }
                }
                )
                .then(data =>
                    setTL(data)
                    // console.log(data)
                )
                .catch(e => { console.log(e) })
        }

    }, [props.teamId])

    if (tl < 1) {
        return (
            <>
                <div>this team has no task lists</div>
                <Button onClick={()=> {
                    
                }}>add new list</Button>
            </>

        )
    } else {
        return (
            <div>
                {
                    tl.map((item, i) => {
                        return (
                            <Accordion>
                                <AccordionSummary key={i}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <p>List name: {item.list_name}</p> 
                                    <p>Due date:  {item.duedate}</p>

                                </AccordionSummary>
                                <AccordionDetails>
                                    {/* <TaskList tlId={item.tl_id} /> */}
                                </AccordionDetails>
                            </Accordion>


                        )
                    })
                }
                 {/* <NewTaskList myTeams={props.myTeams} /> */}
            </div>
        )
    }

}

export default TeamLists