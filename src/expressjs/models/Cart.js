const { readFile, writeFile } = require('../../helpers/file');
const { cartDataPath } = require('../lib/constants');

module.exports = class Cart {
  constructor() {
    this.products = [];
    this.totalPrice = 0;
  }

  static async addProduct(product) {
    try {
      const { products = [], totalPrice = 0 } = await readFile(cartDataPath);
      let newTotalPrice = totalPrice ?? 0;
      // Update product price
      const productIndex = products.findIndex(({ id }) => id === product.id);

      if (productIndex > 0) {
        products[productIndex].quantity += 1;
      } else {
        products.push({ id: product.id, quantity: 1 });
      }

      newTotalPrice += Number(product.price);

      return writeFile(cartDataPath, { products, totalPrice: newTotalPrice });

      // Update product price and quantity
    } catch (error) {
      console.error(error);
    }

    // retrieve the existing cart from the file
    // check if the product already exists in the cart
    // update the quantity & total price if it exists
    // otherwise, add the product to the cart
    // save the updated cart to the file
  }
};
