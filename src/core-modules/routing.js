const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(fs.readFileSync("src/index.html", "utf8"));
    return response.end();
  } else if (request.url === "/messages" && request.method === "POST") {
    const body = [];
    request.on("data", (chunk) => {
      console.log("chunk", chunk);
      body.push(chunk);
    });

    request.on("end", () => {
      // Process the body here
      const data = Buffer.concat(body).toString();
      const message = data.split("=")[1];
      fs.writeFile("src/assets/files/message.txt", message, (err) => {
        console.log("[ERROR] Unable to write file: ", err);
      });
    });

    response.statusCode = 302;
    response.setHeader("Location", "/");
    return response.end();
  }
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<h1>other page</h1>");
  response.end();
});

module.exports = {
  server,
};
