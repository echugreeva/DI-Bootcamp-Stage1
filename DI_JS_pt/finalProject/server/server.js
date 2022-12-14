import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
// import jwt from 'jsonwebtoken'
import db from './connections/elephant_db.js'
import router from './routes/data.js'
import userRouter from './routes/userRouter.js'

dotenv.config();
const app = express();

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
app.use(userRouter);

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
// updateAssignee('1', '1')
// .then(res=>console.log(res))
// updateAssignee('2', '2')
// .then(res=>console.log(res))
// updateAssignee('3', '3')
// .then(res=>console.log(res))
// updateAssignee('4', '4')
// .then(res=>console.log(res))

//  let updateStatus = (taskId, newStatus)=>{
//     return db('tasks')
//     .where({task_id:taskId})
//     .update({status: newStatus})
//     .returning('*')
// }
// updateStatus('1','done')
// .then(res=>console.log(res))
// updateStatus('3','done')
// .then(res=>console.log(res))
// updateStatus('4','done')
// .then(res=>console.log(res))
// updateStatus('5','done')
// .then(res=>console.log(res))

// let leaderBoardData = (teamId)=>{
//     return db('tasks')
//     .join('task_list', 'task_list.tl_id', '=','tasks.tl_id')
//     .join('users', 'users.id','=', 'assignee_id')
//     .select('tasks.assignee_id', 'tasks.tl_id', 'users.username').sum ('tasks.completion_time')  
//     .where({team_id: teamId}, {status: 'done'})
//     .groupBy('tasks.assignee_id')
//     .groupBy('users.email')
//     .groupBy('tasks.tl_id')
    
// }

// leaderBoardData('1')
// .then(res=>console.log(res))

// export const updateTaskStatus = (taskId, taskStatus) => {
//     return db('tasks')
//     .where({task_id: taskId})
//     .update({
//         status: taskStatus})
//     .returning('*')
  
//   }

//   updateTaskStatus(7, 'in process')
//   .then(res=>console.log(res))
// export const updateAssignee = (taskId, assigneeId) => {
//     return db('tasks')
//     .where({task_id: taskId})
//     .update({
//         assignee_id: assigneeId})
//     .returning('*')
  
//   }

//   updateAssignee(7, 4)
//     .then(res=>console.log(res))

// export const members = (tlid) => {
//     return db('teams')
//     .join('task_list', 'teams.team_id', '=','task_list.team_id' )
//     .select("teams.users")
//     .where('task_list.tl_id','=', tlid)
// }

// export const taskIds = (tlid) => {
//   return db('tasks')
//   .select("task_id")
//   .where('tl_id','=', tlid)
// }
  
// members(19).then(res=>console.log(res))
// taskIds(19).then(res=>console.log(res))