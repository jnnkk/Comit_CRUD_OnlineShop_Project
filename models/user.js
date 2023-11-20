const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const USER = sequelize.define('user', {
    userid: { // 유저 아이디
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    userpassword: { // 유저 비밀번호
        type: Sequelize.STRING,
        allowNull: false
    },
    username: { // 유저 이름
        type: Sequelize.STRING,
        allowNull: false
    },
    isadmin: { // 관리자 여부
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

module.exports = USER;
