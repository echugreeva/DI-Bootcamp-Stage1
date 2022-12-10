import { useContext, useEffect, useState } from 'react';
import MyTeams from './MyTeams'
import AddTeam from './AddTeam'
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../../App';

const MyCabinet = (props) =>{
    const [token, setToken] = useState({});
    const {accessToken,setId, userId} = useContext(AppContext);
    const navigate = useNavigate();
   

    useEffect(()=>{
        try {
            const decode = jwt_decode(accessToken)
            console.log(decode);
            setToken(decode);
            const expire = decode.exp;
            setId(decode.userId)
            if(expire * 10000 < new Date().getTime()){
                navigate('../login');
            }
            if (userId < 1){
                setId(decode.userId)
            }
            
        
        }
        catch (e) {
            navigate('../login');
        }
        
    },[])
    console.log(userId)
    
    return (
        <>
        <AddTeam/>
        <MyTeams/>
        </>
        
    )
}

export default MyCabinet