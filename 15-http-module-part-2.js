// ==============================
// HTTP - Module (more features)
// ==============================

const http = require('http');

//? Method createServer
// callback with 2 parameters
// common practice is to call them req & res

// req => incoming REQUEST (imagine a client is requesting from the web browser my webpage, We have information about the method in that object)

// res => we send back the request

const server = http.createServer((req, res) => {
  //console.log(req); // big object with useful info -> what we need is the URL property -> this indicated what address the client is requesting! -> what endpoint the client is requesting

  if (req.url === '/') {
    res.end('Welcome to our home page');
    return;
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
    return;
  }

  //? we can pass html with template strings
  res.end(`
  <h1>Oops!</h1> 
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `);
});

// =======================================================
//* ANOTHER OPTION INSTEAD -> return
//* use: if / else if / else
// REMEMBER: 1 RESPONSE per REQUEST!
// otherwise: 'ERR_STREAM_WRITE_AFTER_END' - ERROR!!
// =======================================================

server.listen(5000);

//! IMPORTANT
// - when we make some changes in this file
// - we need to stop and restart the server to see the actual changes!
// - We can send ONLY ONE RESPONSE per REQUEST !
// - Otherwise, we'll have the error => 'ERR_STREAM_WRITE_AFTER_END'
