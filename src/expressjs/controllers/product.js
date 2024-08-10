const Product = require('../models/Product');

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

exports.getProduct = async (req, res) => {
  try {
    const productInstance = new Product();
    const product = await productInstance.getOne(req.params.productId);
    return res.render('shop/product-detail', { product });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};

exports.getAddProduct = (req, res) => {
  return res.render('admin/product-form', {
    editable: false,
  });
};

exports.postAddProduct = (req, res) => {
  const body = req.body;
  if (!body.name) return res.redirect('/shop');

  const product = new Product();
  product.store({ ...body, id: crypto.randomUUID() });

  return res.redirect('/shop');
};

exports.getEditProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    if (!productId) throw new Error('Bad Request');

    const productInstance = new Product();
    const product = await productInstance.getOne(productId);
    if (!product) throw new Error('Product not found');

    return res.render('admin/product-form', {
      editable: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res.redirect('/shop');
  }
};

exports.postEditProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const body = req.body;
    if (!productId || !body) throw new Error('Bad Request');

    const product = new Product();
    await product.update(productId, body);
    return res.redirect('/shop');
  } catch (error) {
    console.error(error);
    return res.redirect('/shop');
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    if (!productId) throw new Error('Bad Request');

    const product = new Product();
    await product.delete(productId);
    return res.redirect('/shop');
  } catch (error) {
    console.error(error);
    return res.redirect('/shop');
  }
};

exports.getCart = (req, res) => {
  return res.render('shop/cart', { title: 'cart', path: '/shop/cart' });
};
