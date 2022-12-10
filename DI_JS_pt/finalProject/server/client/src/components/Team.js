import TeamMembers from "./TeamMembers"
import TaskList from "./TaskList"
import LeaderBoard from "./LeaderBoard"
import PieChart from './PieChart'
import {useEffect, useContext} from 'react'
import { AppContext } from "../App"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


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
        <Container maxWidth="sm">
            <Grid container spacing={1}>
                <Grid item xs={6}><TeamMembers/></Grid>
                <Grid item xs={6}><LeaderBoard/></Grid>
                <Grid item xs={10}><TaskList tlId={tLId}/></Grid>
            </Grid>
            
            
            
            {/* <PieChart/> */}
             
          
        </Container>
    )
}

export default Team