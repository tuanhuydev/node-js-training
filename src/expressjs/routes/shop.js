const productRoutes = require('express').Router();
const productController = require('../controllers/product');

productRoutes.get('/', productController.getListProduct);

productRoutes.get('/add-product', productController.getAddProduct);

productRoutes.post('/add-product', productController.postAddProduct);

productRoutes.get('/cart', productController.getCart);

module.exports = productRoutes;
