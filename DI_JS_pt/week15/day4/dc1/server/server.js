

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());    either this or express built in parser

app.listen(5002,()=>{
    console.log(`server runs`)
}) 

let msg = 'hello from express'
// console.log(JSON.stringify(msg))

app.get('/api/hello',(req, res)=>{
    res.send(JSON.stringify(msg));
    
}) 

app.post('/api/world', (req, res)=>{
    console.log(`got request`)
       console.log(req.body);
        const l = `I received your request, this is what you've sent: ${req.body.answer}`;
        console.log(l)
        res.send(JSON.stringify(l));
       
      
    }
)
