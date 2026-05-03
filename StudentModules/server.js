const http = require('http');
const student = require('./student');
const url = require('url');


const PORT = 5050;

const server = http.createServer((req,res)=>{
// logic will come here

const parsedURL =url.parse(req.url,true);
const path = parsedURL.pathname;
// Route for the get all request

if(path === "/student" && req.method === "GET"){
    res.writeHead(200,{"Content-Type" : 'application /json'});
    res.end(JSON.stringify(student));
    res.end(JSON.stringify(student));
}
})
server.listen(PORT,()=>{
    console.log(`Server get started on the port ${PORT}`)
})

//  const http = require('http');
// const student = require("./student");

// const PORT = 5050;

// const server = http.createServer((req, res) => {
//   res.write("Server is running");
//   res.end();
// });

// server.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });