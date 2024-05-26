const express = require("express");
const server = express();

const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: false })); // use native query string parsing

server.get("/users", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  return res.send("<h1>Users</h1>");
});

server.use("/admin", require("./routes/adminRoutes"));
server.use("/products", require("./routes/productRoutes"));

server.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>Hello from express</h1>");
});

module.exports = {
  server,
};
