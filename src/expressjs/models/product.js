const { readFile, writeFile } = require('../../helpers/file');
const { getRootPath } = require('../../helpers/utils');
const path = require('path');

const dataPath = path.resolve(getRootPath(), 'expressjs/data/products.json');

module.exports = class Product {
  constructor() {}

  async init() {}

  async store(newProduct) {
    const products = await readFile(dataPath);
    products.push(newProduct);
    return writeFile(dataPath, products);
  }

  async getAll() {
    const products = await readFile(dataPath);
    return products;
  }
};
