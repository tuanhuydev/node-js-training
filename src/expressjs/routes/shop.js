const productRoutes = require('express').Router();
const productController = require('../controllers/product');
const cartController = require('../controllers/cart');

productRoutes.get('/', productController.getListProduct);

productRoutes.get('/products/:productId', productController.getProduct);

productRoutes.get('/products/:productId', productController.getProduct);

// Cart
productRoutes.get('/cart', productController.getCart);

productRoutes.post('/add-to-cart/:productId', cartController.postAddToCart);

module.exports = productRoutes;
