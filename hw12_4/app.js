const http = require('http');
const fs = require('fs');



const server = http.createServer( (request, response) => {
 
        // root, get
        if (request.url === "/" && request.method === "GET") {
            response.setHeader('Content-Type', 'text/plain');
            
            response.write('Hello Web Application');
            response.end();
            
        
        //about, get
        } else if (request.url === "/about" && request.method === "GET") {
            
                response.setHeader('Content-Type', 'text/plain');
                
                response.write('About Me');
                response.end();
        
        
        } else if (request.url === "/users" && request.method === "GET") {
            
                 response.setHeader('Content-Type', 'text/plain');
        
                response.write('About Users');
                response.end();

        } else if (request.url === "/users" && request.method === "GET") {
        
            response.setHeader('Content-Type', 'text/plain');
    
            response.write('About Users');
            response.end();
            
       } else if (request.url === "/prices" && request.method === "GET") {
            
                 response.setHeader('Content-Type', 'text/plain');
        
                response.write('About Prices');
                response.end();

        } else {
            response.write("Not Found");
            response.end();
        }
});

server.listen(5005, 'localhost', () => {
    console.log('Listening on port 5005');
});



