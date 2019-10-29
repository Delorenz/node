const express = require("express");

const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

const creationsRoute = require('./routes/creations');
app.use('/creations', creationsRoute);


//Routes
app.get('/',(req,res)=>{
    res.send('home');
});
// Db co
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true } ,
()=> console.log('connected'));

//Listen 
app.listen('3000');