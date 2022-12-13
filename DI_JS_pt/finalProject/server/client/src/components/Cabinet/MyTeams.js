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
import Box from '@mui/material/Box';
import NewTaskList from './NewTaskList';
import AddTeam from './AddTeam'
import Container from '@mui/material/Container';
import ErrorBoundary from '../ErrorBoundary'
import { Typography } from '@mui/material';

const MyTeams = (props) => {
    const navigate = useNavigate();
    // const [myTeams, setTeams] = useState([]);
    const { userId, setTeam, teamId, setTL, tLId } = useContext(AppContext)
    // useEffect(() => {
    //     if (userId > 0) {
    //         fetch(`/myteams/${userId}`)
    //             .then(res => {
    //                 if (res.status == 200) {
    //                     return res.json()
    //                 }
    //             }
    //             )
    //             .then(data =>
    //                 setTeams(data)
    //                 // console.log(data)
    //             )
    //             .catch(e => { console.log(e) })
    //     }

    // }, [userId])

    if (props.myTeams == []) {
        return (
            <Container
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ m: 2 }}>
                <Typography>You are not a part of any team yet</Typography>
                <Button>add a team</Button>
            </Container>

        )
    } else {
        return (
            <Container
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ m: 2 }} >
                <Box
                     sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign:'right'
                      }}>
                    <List>
                        {
                            props.myTeams.map((item, i) => {
                                return (
                                    <ListItem key={i}
                                    sx={{
                                        marginTop: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        
                                      }}>
                                        
                                            <Typography variant="h5" component="h2" sx={{ m: 1 }}>Team name: {item.name}</Typography>

                                            <Button sx={{ m: 1 }}variant="contained" onClick={() => {
                                                setTeam(item.team_id)
                                                navigate('../team')
                                            }}>go to team board</Button>

                                            <Typography variant="h6" component="h3">Team lists:</Typography>
                                            <TeamLists teamId={item.team_id} myTeams={props.myTeams} />






                                        


                                    </ListItem>
                                )

                            })

                        }

                    </List>


                </Box>


            </Container>

        )
    }

}

export default MyTeams

//  <ErrorBoundary><NewTaskList myTeams={myTeams}/></ErrorBoundary>
                // <ErrorBoundary><AddTeam/></ErrorBoundary> 