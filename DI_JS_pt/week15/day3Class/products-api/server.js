const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const products_router = require('./routes/products.js');
const { getAllProducts } = require('./modules/products.js');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(process.env.PORT||8080, ()=>{
  console.log(`listen on port ${process.env.PORT||8080}`);
})

app.use('/api/products', products_router);
