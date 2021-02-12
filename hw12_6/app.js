const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(request, response) {

    // root, get
    if (request.url === "/" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        let A = fs.readFile(path + './index.html', 'utf8', (err, page) => {
            //response.write(page);
            //response.end();
        })
        let B = response.setHeader('Content-Type', 'text/css');
        fs.readFile(path + './public/css/4.css', 'utf8', (err, page1) => {
            //response.write(page);
            //response.end();
        })    
        let C = response.setHeader('Content-Type', 'text/js');
        fs.readFile(path + './public/js/4.js', 'utf8', (err, page2) => {
            console.log(page2);
            //response.write(page);
            //response.end();
        })
    // else
    } else {
        response.write("Bad Request");
        response.end();
    }
    

}).listen(5005);

console.log("Server started on port 5005 ...");
