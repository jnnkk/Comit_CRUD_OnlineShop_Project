const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs'); // pug 를 사용하겠다는 의미
app.set('views', 'views'); // views 라는 폴더를 views로 사용하겠다는 의미

// 라우터 불러오기
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const buyRoutes = require('./routes/buy');

app.use(bodyParser.urlencoded({extended: false})); // body-parser 미들웨어 등록, 본문의 데이터를 해석해서 req.body 객체로 만들어주는 미들웨어
app.use(express.static(path.join(__dirname, 'public'))); // 정적 파일 제공

// 라우터 연결
app.use('/admin', adminData.routes); // /admin 으로 시작하는 주소는 adminroutes 에서 처리
app.use(shopRoutes.routes); // / 으로 시작하는 주소는 shopRoutes 에서 처리
app.use(buyRoutes.routes); // /buy 으로 시작하는 주소는 buyRoutes 에서 처리

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' }); // 옵션을 객체로 줄 수 있음
});

app.listen(3000);