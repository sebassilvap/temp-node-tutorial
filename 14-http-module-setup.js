// =======================
// HTTP - Module (setup)
// =======================

const http = require('http');

//? Method createServer
// callback with 2 parameters
// common practice is to call them req & res

// req => incoming REQUEST (imagine a client is requesting from the web browser my webpage, We have information about the method in that object)

// res => we send back the request

const server = http.createServer((req, res) => {
  res.write('Welcome to our home page');
  res.end();
});

server.listen(5000);

//? When we run this on the terminal
// - it never ends
// - we have a web server
// - what do they do? -> they keep listening for REQUESTS
// - we want our server to always be UP
