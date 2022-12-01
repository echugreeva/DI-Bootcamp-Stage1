import express from "express";
import { _register, _login, _team, _getTasks, _leaderBoardData, _updateTaskStatus, _updateAssignee,_getMyTeams,_getTeamLists, _addTaskList, _addTasks} from "../controllers/Users.js";
// import { VerifyToken } from "../middlewares/VerifyToken.js";


const router = express.Router();

router.post('/register', _register);
router.post('/login', _login);
router.get('/teams/:uid', _team);
router.get('/tasks/:tid', _getTasks);
router.get('/leaderboard/:teamid', _leaderBoardData);
router.post('/task/status', _updateTaskStatus);
router.post('/task/assignee', _updateAssignee);
router.get('/myteams/:uid', _getMyTeams);
router.get('/teamlists/:tid', _getTeamLists);
router.post('/addlist/', _addTaskList);
router.post('/addtasks/:tlid', _addTasks)
// router.get('/admin',VerifyToken, getUsers);
// router.delete('/logout', logout),
// router.get('/token', VerifyToken, (req, res)=>{
//     res.sendStatus(200)
// })

export default router