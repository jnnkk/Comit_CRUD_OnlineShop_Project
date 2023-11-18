const db = require('../util/database');

module.exports = class PRODUCT {
    constructor(id, title, description, cost, category, stock, imgURL) {
        this.id = id;
        this.title = title;
        this.cost = cost;
        this.imgURL = imgURL;
        this.description = description;
        this.stock = stock;
        this.category = category;
    }

    insert() {
        return db.execute(
            'INSERT INTO product (title, cost, imgURL, description, stock, category) VALUES (?, ?, ?, ?, ?, ?)',
            [this.title, this.cost, this.imgURL, this.description, this.stock, this.category]
        ); // 인서트 공격을 방지하기 위해 두번째 인자에 배열로 넣어준다.
    }

    static fetchAll() {
        return db.execute('SELECT * FROM product');
    } // 전체 상품 목록 가져오기

    static find(id) {

    }

    static delete(id) {
    
    }
};