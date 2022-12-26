import express from 'express';

// const express = require('express'); if I don't add type modules to pack json
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
// import jwt from 'jsonwebtoken'
import db from './config/database.js'
import router from './routes/Users.js'

dotenv.config();
const app = express();

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

//both express json & urlencoded so it is posibile to read req.body

app.listen(process.env.PORT||8080,()=>{
    console.log(`runon ${process.env.PORT||8080}`)
})
//creating token ==>
// app.get('/signjwt', (req,res)=>{
//     const token = jwt.sign(
//         {username:'gooduser', email:'gooduser@mail.com'},
//         process.env.ACCESS_TOKEN_SECRET,
//         {expiresIn:'60s'}
//     );
//     console.log(token);
//     res.cookie('token', token, {
//         httpOnly:true,
//         maxAge: 60 * 1000
//     });
//     res.json({mytoken:token})

// })

// app.get('/verifyjwt', (req,res)=>{
//     const mytoken = req.cookies.token || req.headers['autherization'];
//     console.log(mytoken);
//     if (mytoken===null) res.json({msg:'unauthorized'})
//     jwt.verify(mytoken,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
//         if(err) {
//             res.json({msg:'unauthorized error'})
//         }
//         const email = decoded.email;
//         const user =decoded.username
//         res.json({email,user})
//     })
//     res.json({msg:'ok', mytoken})

// })


try {
    await db.authenticate();
    console.log('db connected')
}
catch (e){
    console.log(e)
}