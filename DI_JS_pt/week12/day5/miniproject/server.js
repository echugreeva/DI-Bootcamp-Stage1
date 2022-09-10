const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let shoppingList =[];
app.use('/', express.static(path.join(__dirname)));

app.post('/',(req, res)=>{
    console.log(req.body);
    shoppingList.push(req.body);
    // let item = req.body.item;
    // let amount = req.body.amount;
    
    res.send(JSON.stringify(shoppingList));

    
})


app.listen(3000,()=>{
    console.log(`server runs`)
})