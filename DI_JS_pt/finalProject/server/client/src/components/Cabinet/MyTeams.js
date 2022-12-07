//shows teams user part off & option to create a team
import {useState, useEffect, useContext} from 'react';
import { AppContext } from '../../App';
import TeamLists from './TeamLists';



const MyTeams = (props)=> {
    
    const [myTeams, setTeams] = useState([]);
    const {userId} = useContext(AppContext)
    useEffect(()=>{
        fetch (`/myteams/${userId}`)
        .then(res=>{
            if(res.status == 200) {
                return res.json()
            }
        }
            )
        .then(data=>
            setTeams(data)
            // console.log(data)
            )
        .catch(e=>{console.log(e)})
    },[])
   
    if (myTeams== []) {
        return (
            <>
                <div>You are not a part of any team yet</div>
                <button>add a team</button>
            </>
            
        )
    }else {
        return (
            <div>
                {
                    myTeams.map((item, i)=> {
                        return (
                            <div key={i}>
                                {item.name}
                                <button onClick={()=>{
                                    
                                }}>go to team board</button>
                                <TeamLists teamId={item.team_id} myTeams={myTeams}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    
}

export default MyTeams