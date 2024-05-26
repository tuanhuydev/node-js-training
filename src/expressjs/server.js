const express = require("express");
const path = require("path");

const server = express();
const { serverPath } = require("../helpers/utils");

const bodyParser = require("body-parser");

// Middleware
server.use(bodyParser.urlencoded({ extended: false })); // use native query string parsing
server.use(express.static(path.resolve(serverPath(), "public"))); // serve static files

// View engine setup
server.set("view engine", "ejs");
server.set("views", path.resolve(serverPath(), "views"));

// Routing
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
server.use("*", require("./controllers/error").get404);

module.exports = {
  server,
};
