// const http = require('http');
// const server = http.createServer((req, res)=> {
//     console.log(req.headers);
//     console.log(`hello I got request`);
//     res.end(`<h1>hello I got request</h1>`);
// })

// //open a listener to a requedst
// server.listen(5556)


//CRUD
// GET get request retrieving data
// POST create new data, create e auser/customer
// PUT update smth
// DELETE delete data

// restful API 

 const express = require('express');
 const app = express();
 const cors = require('cors');
 app.use(cors());
 app.listen(5500,()=>{
     console.log(`server runs`)
 })

 app.use('/', express.static(__dirname)) //__dirname +`/pathtofile`

 app.get('/api/products', (req, res)=>{
     const products =[{
         id:1,
         name:'Iphone',
         proce: 800
     },
     {
        id:2,
        name:'iwatch',
        proce: 700
    }];
    //in express i dont nee to stringify
    res.send(products);

    //

 })// listens for get request