// creating http const for building our server
const http = require('http');
const calc = require('./sub'); // it is not modify module

// using http to create server with 2 arguments - req and res
http.createServer((req, res)=>{

    // writing the content type to be displayed
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("sub: "+ calc.sub(7,2) +"<br>");
    res.write("sum: "+ calc.sum(7,2) +"<br>");
    res.write("mul: "+ calc.mul(7,2) +"<br>");
    res.write("div: "+ calc.div(7,2) +"<br>");
    res.write("modulo: "+ calc.modulo(7,2) +"<br>");
    
    res.write("the date and time are: "+calc.myDateTime());
    res.end();

    //content to be displayed on your backend server
    res.end('Hello, World! This is my first server!!');
}).listen(8080); //listening on port 8080

// running and testing the server
console.log('Server running at http://localhost:8080/');