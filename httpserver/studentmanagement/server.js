const http = require('http');
const student = require('./student');
const url = require('url');

const PORT = 5050;

const server = http.createServer((req,res)=>{

const parsedURL = url.parse(req.url,true);
const path = parsedURL.pathname;
const method = req.method;
    // Route for the GET ALL Request
    if(path === '/student' && method === 'GET'){
        res.writeHead(200,{'content-type' : 'application/json'});
        res.end(JSON.stringify(student));
    }
});

server.listen(PORT,()=>{
    console.log(`Server got started on the port ${PORT}`)
})




// const http = require('http');
// const students = require('./student'); // rename for clarity
// const url = require('url');

// const PORT = 5050;

// const server = http.createServer((req, res) => {
//   const parsedURL = url.parse(req.url, true);
//   const path = parsedURL.pathname;

//   // ✅ Get all students
//   if (path === '/student' && req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(students));

//   // ✅ Get student by ID
//   } else if (path.startsWith('/student/') && req.method === 'GET') {
    
//     const id = parseInt(path.split('/')[2]);
//     const foundStudent = students.find(s => s.id === id);

//     if (foundStudent) {
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(foundStudent));
//     } else {
//       res.writeHead(404, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ message: 'Student not found' }));
//     }

//   } else {
//     // ❗ Route not found
//     res.writeHead(404, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: 'Route not found' }));
//   }
// });

// server.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
// }); 