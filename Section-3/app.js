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
    console.log(req);
    // process.exit();
     });
     server.listen(3000);



