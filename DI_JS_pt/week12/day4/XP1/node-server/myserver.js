// EX 1
// const http = require('http');
// const server = http.createServer((req, res) => {

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><h1>My first respnse</h1></html>');
//         res.write('<html><h1>My second respnse</h1></html>');
//         res.write('<html><p>My third respnse</p></html>');
//         res.end();
// });
// server.listen(8808);

// EX 2

// const http = require('http');
// const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
// const server = http.createServer((req, res) => {

//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(user));

// });
// server.listen(8800);

// EX 3
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('<h1>This is an html tag</h1>'))
app.listen(3000,()=>{
    console.log(`server runs`)
})