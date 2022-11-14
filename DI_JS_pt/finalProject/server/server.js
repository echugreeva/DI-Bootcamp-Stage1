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

let getUsers = () => {
    return db('users')
    .select('email', 'id')
}

getUsers()
.then(res=>console.log(res))





