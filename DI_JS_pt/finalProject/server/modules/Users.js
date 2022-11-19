import db from '../connections/elephant_db.js';


export const register = (user) => {
    return db('users')
    .insert(user)
    .returning('*')
  
  }

//user passes req.body object
// {
//     id: uid,
//     email: dufyu,
//     passwords: fgjfy,
// } etc

export const login = (email) => {
    return db('users')
    .select("*")
    .where({email: email})
}


export const team = (teamId) => {
    return db('teams')
    .join('users', 'users.id', '=','users' )
    .select("*")
    .where({team_id:teamId})
}

export const getTasks = (tlId)=> {
        return db('tasks')
        .select('*')
        .where({tl_id: tlId})
    }