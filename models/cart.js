const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const CART = sequelize.define('cart', {
    userid: { // 유저 아이디
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id: { // 상품 아이디
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }, 
    title: { // 상품 이름
        type: Sequelize.STRING,
        allowNull: false
    }, 
    cost: { // 상품 가격
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
    stock: { // 상품 재고
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = CART;
