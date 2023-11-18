const PRODUCT = require('../models/product'); // 상품 모델 가져오기

function getAdminProduct(req, res, next){
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product'});
}

function postAdminProduct(req, res, next){
    products.push({ title: req.body.title });
    res.redirect('/');
}

function getBuyProduct(req, res, next){
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
}

module.exports = {
    getAdminProduct,
    postAdminProduct,
    getBuyProduct
};