const http = require('http');


const server = http.createServer( (req, res) => {
    // set header
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Hello World</p>');
    res.end();
});

server.listen(5005, 'localhost', () => {
    console.log('Listening on port 5005');
});