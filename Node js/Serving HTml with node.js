const http = require("http");
const fs = require("fs");
const fileread = fs.readFileSync("hi.html");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(fileread);
});


server.listen(80, '127.4.0.1')