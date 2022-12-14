import TeamMembers from "./TeamMembers"
import TaskList from "./TaskList"
import LeaderBoard from "./LeaderBoard"
import PieChart from './PieChart'
import { useNavigate , Link} from 'react-router-dom'
import { useState, useEffect, useContext, createContext } from 'react'
import jwt_decode from 'jwt-decode';
import { AppContext } from "../App"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ErrorBoundary from "./ErrorBoundary"
export const TeamContext = createContext();



const Team = (props) => {
    
    const [lBlistener, setListener] = useState(0)
    const [token, setToken] = useState({});
    const { accessToken, setId, userId,setTeam, teamId, setTL, tLId} = useContext(AppContext);
    const navigate = useNavigate();
    ///fetch current list pass id to Tasklist prop tlId
    useEffect(() => {
        if (teamId > 0) {
            fetch(`/currentlist/${teamId}`)
                .then(res => {
                    if (res.status == 200) {
                        return res.json()
                    }
                }
                )
                .then(data => {
                    setTL(data[0].tl_id)
                    console.log(data)
                }

                )
                .catch(e => { console.log(e) })
        }

    }, [teamId])
    useEffect(() => {
        try {
            const decode = jwt_decode(accessToken)
            console.log(decode);
            setToken(decode);
            const expire = decode.exp;
            setId(decode.userId)
            if (expire * 10000 < new Date().getTime()) {
                navigate('../login');
            }
            if (userId < 1) {
                setId(decode.userId)
            }


        }
        catch (e) {
            navigate('../login');
        }

    }, [])
    console.log(tLId)

    if(!tLId){
        return (
            <>
            <p>This team has no active lists</p>
            <Link to='/mycabinet'>Back to my cabinet</Link>
            </>
        )
    }
    return (
        <TeamContext.Provider value={{lBlistener, setListener}}>
        <Container>
            <Grid container spacing={1}>
               
                <Grid item xs={4}><ErrorBoundary><TeamMembers /></ErrorBoundary></Grid>
                <Grid item xs={8}><ErrorBoundary><LeaderBoard /></ErrorBoundary></Grid>
                <Grid item xs={12}><ErrorBoundary><TaskList tlId={tLId}/></ErrorBoundary></Grid>
            </Grid>



            {/* <PieChart/> */}


        </Container>
        </TeamContext.Provider>
    )
}

export default Team