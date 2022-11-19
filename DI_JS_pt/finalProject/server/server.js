import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
// import jwt from 'jsonwebtoken'
import db from './connections/elephant_db.js'
import router from './routes/data.js'

dotenv.config();
const app = express();

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

app.listen(process.env.PORT||8080,()=>{
    console.log(`run on ${process.env.PORT||8080}`)
})

// let getUsers = () => {
//     return db('users')
//     .select('email', 'id')
// }

// getUsers()
// .then(res=>console.log(res))

// let getTeam = (email) => {

// }

// let getTeamMembers = (teamId) => {
//     return db('teams')
//     .join ('users', 'users.id', '=','users')
//     .select('users')
//     .where({team_id:teamId})
// }

// getTeamMembers('1')
// .then(res=>console.log(res))


// let getTaskList = (teamId) => {
//     return db('task_list')
//     .select("*")
//     .where({team_id: teamId})
// }

// getTaskList('1')
// .then(res=>console.log(res))

// let getTasks = (tlId)=> {
//     return db('tasks')
//     // .join ('task_list', 'task_list.tl_id', '=','tl_id')
//     .select('*')
//     .where({tl_id:tlId})
// }

// getTasks('1')
// .then(res=>console.log(res))

// let updateAssignee = (taskId, userId)=>{
//     return db('tasks')
//     .where({task_id:taskId})
//     .update({assignee_id: userId})
//     .returning('*')
// }
// updateAssignee('2', '1')
// .then(res=>console.log(res))

//  let updateStatus = (taskId, newStatus)=>{
//     return db('tasks')
//     .where({task_id:taskId})
//     .update({status: newStatus})
//     .returning('*')
// }
// updateStatus('2','done')
// .then(res=>console.log(res))

// let leaderBoardData = (teamId)=>{
//     return db('tasks')
//     .join('task_list', 'task_list.tl_id', '=','tasks.tl_id')
//     .join('users', 'users.id','=', 'assignee_id')
//     .select('tasks.assignee_id', 'tasks.tl_id', 'tasks.completion_time','task_list.team_id', 'users.email')
//     .where({team_id: teamId}, {status: 'done'})
    
// }

// leaderBoardData('1')
// .then(res=>console.log(res))