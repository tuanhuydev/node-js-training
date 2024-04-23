const http = require("node:http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Home page</h1>");
    return response.end();
  }
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<h1>other page</h1>");
  response.end();
});

module.exports = {
  server,
};
