const dotenv=require('dotenv');
const baseRoute=require('./baseRoute');
const express=require("express");
const app=express();


// initialize necessary things here before starting the server 
dotenv.config();


//start the server

app.get('/',(req,res,next)=>{
    res.send('listening!!!');
})

app.use('/api',baseRoute);

app.listen(process.env.PORT,()=>{
    console.log('listening at port : '+process.env.PORT);
})

// console.log(managerText);