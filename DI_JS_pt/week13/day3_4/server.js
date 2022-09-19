const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname)));


app.listen(3000,()=>{
    console.log(`server runs`)
}) 

let Parser = require('rss-parser');
let parser = new Parser();

// (async () => {

//   let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
//   console.log(feed.title);

//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//     // console.log(item);
//   });

// })();

app.set('view engine', 'ejs');
app.use('/', express.static(__dirname+'/public'))

// app.get('/', (req, res) => {
//     // The render method takes the name of the HTML
//     // page to be rendered as input
//     // This page should be in the views folder
//     // in the root directory.
//     res.render('home'); //renders the home.ejs file
// })
let data=[];
// let dataToShow=[];
let feed;
app.get('/', (req,res)=>{
    (async () => {

        feed = await parser.parseURL('https://www.thefactsite.com/feed/');
        console.log(`feed length ${feed.items.length}`)
        data = feed.items;
        console.log(typeof(feed));
        // for (let i = 0; i < data.length; i++ ){
        //     data.push(data[i])
        // }
    //    console.log(feed);
    console.log(`data array length ${data.length} `)
    console.log(data[0])   ;
    res.render('public/index',{
      data:data
    })
})()
})
app.get('/search', (req,res)=>{
    (async () => {

        feed = await parser.parseURL('https://www.thefactsite.com/feed/');
        console.log(`feed length ${feed.items.length}`)
        data = feed.items;
        console.log(typeof(feed));
        // for (let i = 0; i < data.length; i++ ){
        //     data.push(data[i])
        // }
    //    console.log(feed);
    console.log(`data array length ${data.length} `)
    console.log(data[0])   ;
    res.render('public/search',{
      data:data })
    })()
})

app.post('/search',(req, res)=>{
    console.log(`this is ${req.body}`);
    console.log(typeof(req.body))
    // let filter=JSON.parse(req.body)
    // console.log(filter)
    let cat = req.body.cat;
    console.log(cat)
    let title = req.body.title;
    (async () => {

        feed = await parser.parseURL('https://www.thefactsite.com/feed/');
        console.log(`feed length ${feed.items.length}`)
        data = feed.items;
        
        console.log(typeof(feed));
        console.log(typeof(data));
        data = data.filter((item=>{item.creator.includes(cat)}))
    res.render('public/search',{
      data:data })
    })()
})