const adminRoutes = require("express").Router();

adminRoutes.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  return res.send("<h1>Admin</h1>");
});

module.exports = adminRoutes;
