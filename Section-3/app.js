// const http = required('./http.js');
// the same thing with this
const http = require('http');
const fs = require('fs');

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

   const url = req.url;
   // to writing on the file
   const method = req.method; 


   if (url == '/'){
    res.write('<html>');
    res.write('<header><title>Enter a Message</header></title>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();   
   }
if(url == '/message' && method == 'POST'){
    const body=[];
    req.on('data', (chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end',()=>{
        const parseBody = Buffer.concat(body).toString();
        //console.log(parseBody);
        const message = parseBody.split('=')[1];
        fs.writeFileSync('message.txt', message);
    });
// fs.writeFileSync('message.txt', 'DUMMY');

res.statusCode = 302;
res.setHeader('Location', '/');
return res.end();
}

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<header><title> My First Page</header></title>');
    res.write('<body><h1>Hello world </body></h1>');
    res.write('</html>');
    res.end();
     });
     server.listen(3000);



