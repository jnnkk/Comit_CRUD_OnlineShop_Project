const PRODUCT = require('../models/product'); // 상품 모델 가져오기

function getMainShop(req, res, next){ // 메인 쇼핑 페이지 렌더링
    PRODUCT.selectAll()
        .then(([rows]) => {
            res.render('shop', {
                prods: rows,
                pageTitle: 'Shop',
                path: '/'
            }); // views/shop.ejs
        })
        .catch(err => {
            console.log("### product.fetchAll 에러 ###")
            console.log(err);
        });
}

module.exports = {
    getMainShop
};