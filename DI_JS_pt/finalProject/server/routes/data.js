import express from "express";
import { _register} from "../controllers/Users.js";
// import { VerifyToken } from "../middlewares/VerifyToken.js";


const router = express.Router();

router.post('/register', _register);
// router.post('/login', login);
// router.get('/admin',VerifyToken, getUsers);
// router.delete('/logout', logout),
// router.get('/token', VerifyToken, (req, res)=>{
//     res.sendStatus(200)
// })

export default router