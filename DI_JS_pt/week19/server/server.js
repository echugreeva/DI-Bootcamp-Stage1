import express from 'express';

// const express = require('express'); if I don't add type modules to pack json
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
// import jwt from 'jsonwebtoken'
import db from './config/database.js';
import router from './routes/Users.js';
import path from 'path';

dotenv.config();
const app = express();
const __dirname = path.resolve();


app.use(cors({credentials:true, origin:'https://login-reg-app-heroku.herokuapp.com'}));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

//both express json & urlencoded so it is posibile to read req.body

app.listen(process.env.PORT||8080,()=>{
    console.log(`runon ${process.env.PORT||8080}`)
})


try {
    await db.authenticate();
    console.log('db connected')
}
catch (e){
    console.log(e)
}

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});