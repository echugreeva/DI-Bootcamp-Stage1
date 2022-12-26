//EX 1
// let largeNumber = require('./main.js');
// const b = 5;
// let sum = b + largeNumber.largeNumber;
// console.log(sum);

//EX 2 
// let http = require("http");
// const server = http.createServer( () => {
//     console.log('I am listening....');
//  });
//  server.listen(5000);

// const host = 'localhost';
// const port = 8000;

// const requestListener = function (req, res) {
//     res.setHeader("Content-Type", "text/html");
//     res.writeHead(200);
//     res.end(`<html><body><p>My module is: ${sum}</p><h1>Hi there at the frontend</h1></body></html>`);
// };


// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
    
// });


// EX 3
let http = require("http");
let currentDate = require('./main.js');
let date = currentDate.myDate();
const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><p>The date and time are currently: ${date}</p></body></html>`);
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
    
});
