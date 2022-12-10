//shows teams user part off & option to create a team
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../App';
import TeamLists from './TeamLists';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyTeams = (props) => {
    const navigate = useNavigate();
    const [myTeams, setTeams] = useState([]);
    const { userId, setTeam, teamId, setTL, tLId } = useContext(AppContext)
    useEffect(() => {
        if (userId > 0) {
            fetch(`/myteams/${userId}`)
                .then(res => {
                    if (res.status == 200) {
                        return res.json()
                    }
                }
                )
                .then(data =>
                    setTeams(data)
                    // console.log(data)
                )
                .catch(e => { console.log(e) })
        }

    }, [userId])

    if (myTeams == []) {
        return (
            <>
                <div>You are not a part of any team yet</div>
                <button>add a team</button>
            </>

        )
    } else {
        return (
            <List>
                {
                    myTeams.map((item, i) => {
                        return (
                            <ListItem key={i}>
                                
                                        Team name:
                                        {item.name}
                                        <Button onClick={() => {
                                            setTeam(item.team_id)
                                            navigate('../team')
                                        }}>go to team board</Button>

                                    
                                        <TeamLists teamId={item.team_id} myTeams={myTeams} />
                                    

                             


                            </ListItem>
                        )
                    })
                }
            </List>
        )
    }

}

export default MyTeams