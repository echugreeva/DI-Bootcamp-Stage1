import express from "express";
import { _register, _login, _team, _getTasks, _leaderBoardData, _updateTaskStatus, _updateAssignee,_getMyTeams,_getTeamLists, _addTaskList, _addTasks,_addTeam, _addUserToTeam,_currentList,_members, _taskIds} from "../controllers/Users.js";
import { VerifyToken } from "../middlewares/VerifyToken.js";


const router = express.Router();

router.get('/tasks/:tlid', _getTasks);
router.post('/task/status', _updateTaskStatus);
router.post('/task/assignee', _updateAssignee);




// router.get('/teams/:tid', _team);
// router.get('/teams/:tlid', _team);



// router.get('/myteams/:uid', _getMyTeams);
// router.get('/teamlists/:tid', _getTeamLists);



// router.get('/getmembers/:tlid', _members);
// router.get('/gettaskIds/:tlid', _taskIds);


export default router