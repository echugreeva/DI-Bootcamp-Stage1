import {useState, useEffect,useContext} from 'react'
import { AppContext } from '../App';

const TeamMembers = (props) => {
    const {teamId}=useContext(AppContext)
    const [members, setMembers] = useState([]);
    useEffect(()=>{
        fetch (`/teams/${teamId}`)
        .then(res=>{
            if(res.status == 200) {
                return res.json()
            }
        }
            )
        .then(data=>
            setMembers(data)
            // console.log(data)
            )
        .catch(e=>{console.log(e)})
    },[])
    
    if(members.length < 1) {
        return (
            <div>hello</div>
        )
    } else {
        return (

            <>
            {
                
                members.map((i)=>{
                    return <p key={i.id}>{i.email}</p>
                })
            }
            </>
        )
    }
    
}

export default TeamMembers