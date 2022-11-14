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