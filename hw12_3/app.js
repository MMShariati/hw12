const http = require('http');
const fs = require('fs');

// let rawdata = fs.readFileSync('./public/data.json');
// let dataParse = JSON.parse(rawdata);
// console.log(dataParse);

const server = http.createServer( (request, response) => {
 
        // root, get
        
            response.setHeader('Content-Type', 'text/plain');
            
            console.log(request.url);
            response.end();
});
        
 

server.listen(5005, 'localhost', () => {
    console.log('Listening on port 5005');
});



