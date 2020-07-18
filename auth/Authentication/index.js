const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Initiate Mongo Server
mongoose.connect('mongodb://127.0.0.1:27017/authentication',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const connection = mongoose.connection;
connection.once('open',function(){
    console.log('connection established');
});
//Mongo Server Implemented

app.get('/',(req,res) => {
    res.json({message:'API Working'});
});

app.use('/user',user);

app.listen(PORT,(req,res) => {
    console.log(`Server started at PORT ${PORT}`);
});