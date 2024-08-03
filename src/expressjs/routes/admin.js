const adminRoutes = require('express').Router();
const adminController = require('../controllers/admin');

adminRoutes.get('/', adminController.index);

module.exports = adminRoutes;
