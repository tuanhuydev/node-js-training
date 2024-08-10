const { getRootPath } = require('../../helpers/utils');
const path = require('path');

const productDataPath = path.resolve(
  getRootPath(),
  'expressjs/data/products.json',
);

const cartDataPath = path.resolve(getRootPath(), 'expressjs/data/cart.json');

module.exports = {
  productDataPath,
  cartDataPath,
};
