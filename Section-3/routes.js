const fs = require('fs');


const requestHandler = (req, res) => {
    
    const url = req.url;
    const method = req.method;
    if (url == '/'){
        res.write('<html>');
        res.write('<header><title>Enter a Message</header></title>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();   
       }
    
        if(url == '/message' && method == 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
         return req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            //console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message, () => {
                // to show if error exist
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
            });
        });
        // fs.writeFileSync('message.txt', 'DUMMY');
        }
    
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<header><title> My First Page</header></title>');
        res.write('<body><h1>Hello world </body></h1>');
        res.write('</html>');
        res.end();
};

module.exports = requestHandler;