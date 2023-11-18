const db = require('../util/database');

module.exports = class PRODUCT {
    constructor(id, title, description, cost, category, inStock, imgURL) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.cost = cost;
        this.category = category;
        this.inStock = inStock;
        this.imgURL = imgURL;
    }

    save() {

    }

    static fetchAll() {
        return db.execute('SELECT * FROM product');
    } // 전체 상품 목록 가져오기

    static findById(id) {

    }

    static deleteById(id) {
    
    }
};