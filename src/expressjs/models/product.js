const { readFile, writeFile } = require('../../helpers/file');
const { productDataPath } = require('../lib/constants');

module.exports = class Product {
  constructor() {}

  async init() {}

  async store(newProduct) {
    const products = await readFile(productDataPath);
    products.push(newProduct);
    return writeFile(productDataPath, products);
  }

  async getAll() {
    const products = await readFile(productDataPath);
    return products;
  }

  async getOne(productId) {
    const products = await readFile(productDataPath);
    return products.find((product) => product.id === productId);
  }

  async update(productId, productToUpdate) {
    const exsistingProduct = await this.getOne(productId);
    if (!exsistingProduct) throw new Error('Unable to find product');

    const { id, ...restBody } = exsistingProduct;
    const updatedProduct = { ...restBody, ...productToUpdate, id };
    // Update the product
    const products = await this.getAll();
    const updatedProducts = products.map((product) => {
      if (product.id === productId) return updatedProduct;
      return product;
    });
    // Re-save products
    return writeFile(productDataPath, updatedProducts);
  }

  async delete(productId) {
    const product = await this.getOne(productId);
    if (!product) throw new Error('Product not found');
    const products = await this.getAll();
    // Remove the product
    const updatedProducts = products.filter(
      (product) => product.id !== productId,
    );
    return writeFile(productDataPath, updatedProducts);
  }
};
