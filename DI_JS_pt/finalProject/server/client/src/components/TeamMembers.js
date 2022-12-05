import {useState, useEffect,useContext} from 'react'
import { AppContext } from '../App';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Avatar } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

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
            <div>loading</div>
        )
    } else {
        return (

            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Your team:
                </Typography>
                <List>
            {
                
                members.map((i)=>{
                    return <ListItem key={i.id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <SentimentVerySatisfiedIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                {i.email}
                            </ListItemText>
                        </ListItem>
                })
            }
                </List>
            </Grid>
        )
    }
    
}

export default TeamMembers

