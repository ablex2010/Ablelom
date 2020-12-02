const fs = require("fs");

const http = require('http')

const server = http.createServer((req, res)=>{
// console.log(req.url, req.method, req.headers);
  res.setHeader('content-type', 'text/html');
const url = req.url;
const method = req.method;
if(url == '/'){
  
    res.write('<html>');
    res.write('<header><title> Enter your information </title></header>');
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create-user</button></form></body>');

    res.write('</html>');
    return res.end();
}
    // res.write('<body><ul><li>User1</li></ul></body>');


if(url =='/create-user' && method =='POST'){
    fs.writeFileSync('create-user.txt', 'DUMMY');
    res.sratusCode = 302;
    res.serHeader('Location', '/');
    return res.end();
}

res.setHeader('content-type', 'text/html');
res.write('<html>');
res.write('<header><title> My web Page </title></header>');
res.write('<body><h1>Welcome to the Registration Page</h1></body>');
res.write('</html>');
 res.end();

}

);


server.listen(3000);