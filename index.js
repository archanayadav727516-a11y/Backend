const http = require("http");
const myServer = http.createServer((req, res)=>{
    const log = `${Date.now()} : New Req Received\n `;
    fs.appendFile("log.txt", log, (err,data) =>{
        res.end("Hello from Server Again");
    });
//   fstat.appendFile("log.txt")
//     // console.log("req");
//     res.end("Hello frome Server Again");
});

myServer.listen(8000,()=> console.log("Server Started !"));