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

    /** 상품 추가 */
    insert() {
        return db.execute(
            'INSERT INTO product (title, cost, imgURL, description, stock, category) VALUES (?, ?, ?, ?, ?, ?)',
            [this.title, this.cost, this.imgURL, this.description, this.stock, this.category]
        ); // 인서트 공격을 방지하기 위해 두번째 인자에 배열로 넣어준다.
    }

    /** 상품 다 불러오기 */
    static selectAll() {
        return db.execute('SELECT * FROM product');
    }

    /** 상품 하나만 불러오기, id : 상품 id */
    static find(id) {
        return db.execute('SELECT * FROM product WHERE product.id = ?', [id]);
    }

    /** 상품 삭제, id : 상품 id */
    static delete(id) {
        return db.execute('DELETE FROM product WHERE product.id = ?', [id]);
    }

    /** 상품 수정, id : 상품 id */
    static updateStock(id, title, description, cost, category, stock, imgURL) {
        if (title === null) {}

        return db.execute(
            'UPDATE product SET title = ?, description = ?, cost = ?, category = ?, stock = ?, imgURL = ? WHERE product.id = ?',
            [title, description, cost, category, stock, imgURL, id]
        );
    }
};