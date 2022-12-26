const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());
// const hobbies = [
//     {
//         id:1,
//         name:"SAP"
//     },
//     {
//         id:2,
//         name:"Netflix"
//     },
//     {
//         id:3,
//         name:"Wine & Dine"
//     },
//     {
//         id:4,
//         name:"Pilates"
//     }
// ]
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/form',(req, res)=>{
    res.sendFile(path.join(__dirname + "/public/index.html"));

})
app.get('/pic',(req, res)=>{
    res.sendFile(path.join(__dirname + "/public/image.html"));

})
app.get('/hobbies/:name',(req,res)=>{
    const name = req.params.name;
    var letters = /^[A-Za-z]+$/;
    if(!name.match(letters)){
        return res.status(404).send(`not found`)
    } else {
        res.send(name);
    }
    
    }
)
// app.get('/hobbies/:id',(req,res)=>{
//     const id = req.params.id;
//     const hobby = hobbies.find(item =>item.id == id);
//     if(!hobby) {
//         return res.status(404).send(`not found`)
//     }
//         res.send(hobby);
//     }
// )
app.get('/formdata', (req,res)=>{
    const formRes = req.query;
    res.send(`${formRes.email} sent you this message: "${formRes.texarea}"`)

})


app.listen(3000,()=>{
    console.log(`server runs`)
})