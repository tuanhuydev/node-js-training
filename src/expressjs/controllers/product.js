const Product = require('../models/product');

exports.getListProduct = (req, res) => {
  return res.render('pages/product-list', {
    products: Product.getAll(),
  });
};

exports.getAddProduct = (req, res) => {
  return res.render('pages/add-product');
};

exports.postAddProduct = (req, res) => {
    const body = req.body;
    if (!body.name) return res.redirect("/products/add-product");
    
    const product = new Product(body.name);
    product.store();
    
    return res.redirect("/products");
}; 
