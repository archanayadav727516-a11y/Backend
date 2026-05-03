const express = require('express');
console.log(typeof express);

const app = express();
const PORT = 5151;


// GET < POST< PUT DELETE
  
app.get('/', (req,res)=>{
    res.send("hello world");
})

// stitc the userrouter here
const userRoutes = require('./router/userRoutes');

app.use('/users', userRoutes); 

app.post('/post', (req,res)=>{
    res.send("this os a post request");
})
// start the server

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})


// const express = require('express');

// const app = express();
// const PORT = 5151;


// // start the server
// app.listen{PORT, ()=>{
//     console.log(`server started on port ${PORT}`);
// }}