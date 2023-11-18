const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs'); // pug 를 사용하겠다는 의미
app.set('views', 'views'); // views 라는 폴더를 views로 사용하겠다는 의미

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const buyRoutes = require('./routes/buy');
const db = require('./util/database');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(buyRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' }); // 옵션을 객체로 줄 수 있음
});

app.listen(3000);
