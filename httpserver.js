const http = require('http');

const PORT = 3456;

const server = http.createServer((req,res)=>{
//   Iand need to writ the log tp accept and then respond back   

if (req.url==='/' && req.method === 'GET'){
    res.writeHead(200,{'content-Type' : 'text/plain'});
    res.end('Welcome to the Home Page !');
    
}else if(req.url === '/about' && req.method === 'GET'){
    res.writeHead(200,{'content-Type': 'text/plain'});
    res.end('Welcome to the About Page !');
}else if(req.url === '/api/data' )
{
}else{
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.end(404, {'Content-type' : 'text/plain'} );
    res.end('404-nott Found')
}
});
server.listen(PORT,()=>{
    console.log(`Server started runing on the port ${PORT}`);
    
})