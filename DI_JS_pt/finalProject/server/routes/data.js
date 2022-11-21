import express from "express";
import { _register, _login, _team, _getTasks,_leaderBoardData} from "../controllers/Users.js";
// import { VerifyToken } from "../middlewares/VerifyToken.js";


const router = express.Router();

router.post('/register', _register);
router.post('/login', _login);
router.get('/teams/:uid', _team);
router.get('/tasks/:tid', _getTasks);
router.get('/leaderboard/:teamid', _leaderBoardData);
// router.get('/admin',VerifyToken, getUsers);
// router.delete('/logout', logout),
// router.get('/token', VerifyToken, (req, res)=>{
//     res.sendStatus(200)
// })

export default router