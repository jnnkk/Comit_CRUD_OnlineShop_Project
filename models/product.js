const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const PRODUCT = sequelize.define('product', {
    id: { // 상품 아이디
        type: Sequelize.INTEGER,
        autoIncrement: true,
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
    imgURL: { // 상품 이미지
        type: Sequelize.STRING
    }, 
    description: { // 상품 설명
        type: Sequelize.STRING
    }, 
    stock: { // 상품 재고
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }, 
    category: { // 상품 카테고리
        type: Sequelize.STRING,
        allowNull: false
    } 
});

module.exports = PRODUCT;