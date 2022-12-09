import TeamMembers from "./TeamMembers"
import TaskList from "./TaskList"
import LeaderBoard from "./LeaderBoard"
import PieChart from './PieChart'
import {useEffect, useContext} from 'react'
import { AppContext } from "../App"

const Team = (props)=> {
    const {teamId, tLId, setTL }=useContext(AppContext)
    ///fetch current list pass id to Tasklist prop tlId
    useEffect(()=>{
        if(teamId>0){
            fetch (`/currentlist/${teamId}`)
            .then(res=>{
                if(res.status == 200) {
                    return res.json()
                }
            }
                )
            .then(data=>{
                setTL(data[0].tl_id)
                console.log(data)
            }
                
                )
            .catch(e=>{console.log(e)})
        }
        
    },[teamId]) 
    
    console.log(tLId)
    

    return (
        <div>
            <TeamMembers/>
            <LeaderBoard/> 
            <TaskList tlId={tLId}/>
            {/* <PieChart/> */}
             
          
        </div>
    )
}

export default Team