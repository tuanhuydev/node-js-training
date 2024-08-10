const adminRoutes = require('express').Router();
const adminController = require('../controllers/admin');
const productController = require('../controllers/product');

adminRoutes.get('/', adminController.index);

// Add Product
adminRoutes.get('/add-product', productController.getAddProduct);

adminRoutes.post('/add-product', productController.postAddProduct);

adminRoutes.get('/edit-product/:productId', productController.getEditProduct);

adminRoutes.post('/edit-product/:productId', productController.postEditProduct);

adminRoutes.post('/delete-product/:productId', productController.deleteProduct);

module.exports = adminRoutes;
