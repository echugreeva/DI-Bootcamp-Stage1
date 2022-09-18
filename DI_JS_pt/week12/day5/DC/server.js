const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
let users =[];

app.use('/', express.static(path.join(__dirname)));
// app.get('/', express.static(path.join(__dirname)));
app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname + "/login.html"));
    
}) 


app.post('/register',(req, res)=>{
    console.log(req.body);
    let uname = req.body.uname;
    let check = users.find(item => item.uname == uname);
    if (!check) { 
        users.push(req.body);
        res.send('thanks for registering, ' + req.body.fname + req.body.lname);
        console.log(users);
    } else {
        res.send(`this username already exists`);
    }
    

})
app.post('/login',(req, res)=>{
    console.log(req.body);
    let uname = req.body.uname;
    let check = users.find(item => item.uname == uname);
    if (check) { 
        res.send(`this username doesn't exist`);
        console.log(users);
    } else {
        res.send(`Welcome! ${req.body.uname}`);
    }
    
})

app.listen(3000,()=>{
    console.log(`server runs`)
}) 