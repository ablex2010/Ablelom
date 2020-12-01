// const http = required('./http.js');
// the same thing with this
const http = require('http');

// function rqListner(req, res){

// }
// http.createServer(rqListner);
// or
// http.createServer(function(req, res){

// });
// or
// const server = http.createServer((req, res)=>{
//     console.log(req);
//     // process.exit();
//      });

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-TYpe', 'text/html');
    res.write('<html>');
    res.write('<header><title> My First Page</header></title>');
    res.write('<body><h1>Hello world </body></h1>');
    res.write('</html>');
    res.end();
     });
     server.listen(3000);



