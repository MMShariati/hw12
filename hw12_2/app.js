const http = require('http');
const fs = require('fs');

// let rawdata = fs.readFileSync('./public/data.json');
// let dataParse = JSON.parse(rawdata);
// console.log(dataParse);

const server = http.createServer( (request, response) => {
 
        // root, get
        if (request.url === "/" && request.method === "GET") {
            response.setHeader('Content-Type', 'text/html');
            fs.readFile('./public/index.html', 'utf8', (err, page) => {
                response.write(page);
                response.end();
            });
        
        //test, get
        } else if (request.url === "/json" && request.method === "GET") {
            response.setHeader('Content-Type', 'text/plain');
            fs.readFile('./public/data.json', (err, data) => {
                if (err) {
                     console.log(err);
                };
                let dataParse = JSON.parse(data);
                response.write(data);
                response.end();
            })
        
        //else
        } else {
            response.write("Bad Request");
            response.end();
        }
});

server.listen(5005, 'localhost', () => {
    console.log('Listening on port 5005');
});



