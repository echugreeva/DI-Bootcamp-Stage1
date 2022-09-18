const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

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
let feed;
app.get('/', (req,res)=>{
    (async () => {

        feed = await parser.parseURL('https://www.thefactsite.com/feed/');
        // console.log(feed.title);
      
        feed.items.forEach(item => {
        //   console.log(item.title + ':' + item.link)
          console.log(item);})
        })();
    res.render('public/index',{
      title:'homepage',
      data:feed
    })
  })
  