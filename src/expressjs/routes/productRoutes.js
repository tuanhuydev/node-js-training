const fs = require("fs");
const path = require("path");
const productRoutes = require("express").Router();

productRoutes.get("/", (req, res) => {
  res.redirect("/");
});
productRoutes.get("/add-product", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  fs.readFile(
    path.resolve(__dirname, "../../assets/ui/add-product.html"),
    (err, data) => {
      if (err) return res.send("<h1>Something went wrong</h1>");
      return res.send(data);
    },
  );
});

productRoutes.post("/add-product", (req, res) => {
  const body = req.body;
  if (!body.name) return res.redirect("/add-product");
  return res.json({ message: "Product added successfully", data: req.body });
});

module.exports = productRoutes;
