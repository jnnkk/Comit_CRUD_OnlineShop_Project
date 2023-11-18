// 데이터베이스 연결 설정

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', // DB 서버 주소
    user: 'root', // DB 사용자 아이디
    database: 'onlineshop', // DB 스키마 이름
    password: '0405', // DB 사용자 비밀번호
});

module.exports = pool.promise(); // 프로미스 사용하여 비동기적 데이터 다루기