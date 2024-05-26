const products = [];
module.exports = class Product {
    constructor(name) {
        this.name = name;
    }

    store() {
        products.push(this);
    }


    static getAll() {
        return products;
    }
}