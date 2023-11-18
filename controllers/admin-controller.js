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
    );
    product.insert()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => { 
            console.log("### product.insert 에러 ###")
            console.log(err);
        });
}

function getBuyProduct(req, res, next){
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
}

module.exports = {
    getAdminProduct,
    postAdminProduct,
    getBuyProduct
};