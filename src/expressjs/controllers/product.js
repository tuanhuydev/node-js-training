const Product = require('../models/product');

exports.getListProduct = async (req, res) => {
  try {
    const product = new Product();
    const products = await product.getAll();
    return res.render('shop/products', {
      products,
      path: '/products',
      title: 'Shop',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};

exports.getAddProduct = (req, res) => {
  return res.render('admin/add-product');
};

exports.postAddProduct = (req, res) => {
  const body = req.body;
  if (!body.name) return res.redirect('/shop/add-product');

  const product = new Product();
  product.store({ name: body.name });

  return res.redirect('/shop');
};

exports.getCart = (req, res) => {
  return res.render('shop/cart', { title: 'cart', path: '/shop/cart' });
};
