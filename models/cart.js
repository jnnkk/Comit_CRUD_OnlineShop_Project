const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const CART = sequelize.define('cart', {
    cost: { // 상품 가격
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
    stock: { // 상품 수량
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

module.exports = CART;
