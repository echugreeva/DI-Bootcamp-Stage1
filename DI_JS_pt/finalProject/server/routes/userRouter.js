import express from "express";
import { _register, _login, _team, _getTasks, _leaderBoardData, _updateTaskStatus, _updateAssignee,_getMyTeams,_getTeamLists, _addTaskList, _addTasks,_addTeam, _addUserToTeam,_currentList,_members, _taskIds} from "../controllers/Users.js";
import { VerifyToken } from "../middlewares/VerifyToken.js";


const userRouter = express.Router();

router.post('/register', _register);
router.post('/login', _login);

router.get('/token', VerifyToken, (req, res)=>{
    res.sendStatus(200)
})

// router.get('/admin',VerifyToken, getUsers);
// router.delete('/logout', logout),
// router.get('/token', VerifyToken, (req, res)=>{
//     res.sendStatus(200)
// })

export default userRouter