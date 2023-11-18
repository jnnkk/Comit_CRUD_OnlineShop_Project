const PRODUCT = require('../models/product'); // 상품 모델 가져오기

function getMainShop(req, res, next){
    PRODUCT.selectAll()
        .then(([rows]) => {
            console.log(rows);
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