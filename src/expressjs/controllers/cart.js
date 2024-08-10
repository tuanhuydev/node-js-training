const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.postAddToCart = async (req, res) => {
  try {
    const productInstance = new Product();
    // extract the product id from the request body
    const productId = req.params.productId;
    if (!productId) throw new Error('Bad Request');

    const product = await productInstance.getOne(productId);
    if (!product) throw new Error('Product not found');

    await Cart.addProduct(product);
  } catch (error) {
    console.error(error);
  } finally {
    return res.redirect('/shop');
  }
};
