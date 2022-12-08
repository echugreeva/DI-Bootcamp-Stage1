import TeamMembers from "./TeamMembers"
import TaskList from "./TaskList"
import LeaderBoard from "./LeaderBoard"
import PieChart from './PieChart'

const Team = (props)=> {
    ///fetch current list pass id to Tasklist prop
    return (
        <div>
            <TeamMembers/>
            <LeaderBoard/> 
            <TaskList/>
            {/* <PieChart/> */}
             
          
        </div>
    )
}

export default Team