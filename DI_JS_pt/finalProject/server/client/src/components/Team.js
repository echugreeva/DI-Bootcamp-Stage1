import TeamMembers from "./TeamMembers"
import TaskList from "./TaskList"
import LeaderBoard from "./LeaderBoard"
import PieChart from './PieChart'

const Team = (props)=> {
    return (
        <div>
            <TeamMembers/>
            <TaskList/>
            <PieChart/>
            <LeaderBoard/>
          
        </div>
    )
}

export default Team