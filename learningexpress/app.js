// middleware
// type
// .1 application level middleware
// .2 Route level middleware
// .3 custom middleware
// .4 inbuilt express middleware
// . 5 external m/w
// .6 error handling m/w





const express = require('express');
const app = express();
const PORT = 5151;
//  inbuilt middleware.of express
app.use(express.json());

// external m/w
const morgan = require('morgan');
app.use(morgan('dev'));


 function logRequest(req,res,next){
    console.log(`[${new Date().toDateString()}] ${req.method} ${req.url}`);
    next();
 }

 app.use(logRequest);
 app.get("/", (req,res)=>{
    res.send("Home Route !");
 })
 
 app.post("/hello", (req, res)=>{
    res.send("hello")
 })


//  stich the router file to the app.js
const useRoute = require('./router/userRoutes');
app.use('/users', useRoute);

// error handling M/W - special MW : err, req,res, next
app.get('/divide',(req,res, next)=>{
    try{
        const resultt = 10/0;
        if(!isFinite(result)){
            throw new error ('Divide By 0');
        }
        res.send(`Result is ${result}`);
    }catch(err){
        next(err);
    }
})
app.use((err,req,res,next)=>{
    console.log(`error  mW caught an erroe : ${err.message}`);
    res.status(500).json({
        status : "fail",
        message : err.message|| 'unexpected failure'
    }); 
})
//  server get start
 app.listen(PORT, ()=>{
    console.log(`Server got started on the port ${PORT}`)
 })



 