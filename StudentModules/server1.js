const http = require('http');
const student = require("./student");

const PORT = 5000;
const server = http.createServer((req,res)=>{
    // logic will come here

});
 server.listen(PORT, ()=>{
    console.log()`server get started on the port ${PORT}`
 }) 