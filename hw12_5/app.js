const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    console.log(req.url, req.method);
    // set header
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./public/index.html', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    })
})

server.listen(5005, 'localhost', () => {
    console.log('Listening on port 5005');
})