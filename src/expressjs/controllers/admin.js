const Product = require('../models/Product');

exports.index = async (req, res) => {
  try {
    const product = new Product();
    const products = await product.getAll();
    return res.render('admin/index', {
      title: 'Admin',
      path: '/admin',
      products,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};
