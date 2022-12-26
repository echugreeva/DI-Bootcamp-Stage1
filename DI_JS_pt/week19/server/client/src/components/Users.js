import {useState, useEffect} from 'react';

const Users = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('/admin')
        .then(res=>{
            if(res.status == 200) {
                return res.json()
            }
        }
            )
        .then(data=>
            setUsers(data))
        .catch(e=>{console.log(e)})
    },[])

    return (
        <div>
            <h1>Users</h1>
            {
                users ? users.map(item=>{
                    return (
                        <div key={item.id}>
                            <p>{item.email}</p>
                        </div>
                    )
                }) : 'Unathorized'
            }
        </div>
    )
}

export default Users