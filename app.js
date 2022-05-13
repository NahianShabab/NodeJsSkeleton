const dotenv=require('dotenv');
const baseRoute=require('./baseRoute');
const rateLimit=require('express-rate-limit');
const cors=require('cors');
const express=require("express");
const app=express();


// initialize necessary things here before starting the server 
dotenv.config();


//add rate limiter 
const limiter=rateLimit({
    windowMs:process.env.MAX_REQUEST_PER_MINUTE*60*1000,
    max:process.env.MAX_REQUEST_PER_MINUTE
});
app.use(limiter);

app.use(cors());

//start the server

app.get('/',(req,res,next)=>{
    res.send('listening!!!');
})

app.use('/api',baseRoute);

app.listen(process.env.PORT,()=>{
    console.log('listening at port : '+process.env.PORT);
})

// console.log(managerText);