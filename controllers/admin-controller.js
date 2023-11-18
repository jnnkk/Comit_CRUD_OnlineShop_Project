const PRODUCT = require('../models/product'); // 상품 모델 가져오기

function getAdminProduct(req, res, next){
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product'});
}

function postAdminProduct(req, res, next){
    const title = req.body.title;
    const cost = req.body.cost;
    const imgURL = req.body.imgURL;
    const description = req.body.description;
    const stock = req.body.stock;
    const category = req.body.category
    const product = new PRODUCT(
        null,
        title,
        description,
        cost,
        category,
        stock,
        imgURL
    ); // 상품 객체 생성
    product.insert()
        .then(() => { // insert 성공 시 메인으로 리다이렉트
            res.redirect('/');
        })
        .catch(err => { 
            
            console.log(err);
        });
}

module.exports = {
    getAdminProduct,
    postAdminProduct
};