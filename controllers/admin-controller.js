const PRODUCT = require('../models/product'); // 상품 모델 가져오기

function getAddProduct(req, res, next){ // 상품 추가 페이지 렌더링
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product'});
}

function postAddProduct(req, res, next){ // 상품 추가
    const title = req.body.title;
    const cost = req.body.cost;
    const imgURL = req.body.imgURL;
    const description = req.body.description;
    const stock = req.body.stock;
    const category = req.body.category
    PRODUCT.create({
        title: title,
        cost: cost,
        imgURL: imgURL,
        description: description,
        stock: stock,
        category: category
    }).then(result => {
        console.log("### product.create 성공 ###");
        res.redirect('/');
    }).catch(err => {
        console.log("### product.create 에러 ###")
        console.log(err);
    });
}

function getEditDeleteProduct (req, res, next) { // 상품 수정, 삭제 페이지 렌더링
    PRODUCT.findAll()
    .then((result) => {
        res.render('edit-delete-product', {
            prods: result,
            pageTitle: 'Edit Product',
            path: '/admin/edit-delete-product'
        }); // views/shop.ejs
    })
    .catch(err => {
        console.log("### product.fetchAll 에러 ###")
        console.log(err);
    });
}

function getEditProduct (req, res, next) { // 상품 수정 페이지 렌더링
    const productId = req.params.productId;
    PRODUCT.findAll({where : {id : productId}})
    .then((result) => {
        res.render('edit-product', {
            prods: result,
            pageTitle: 'Edit Product',
            path: '/admin/edit-product'
        }); // views/edit-product.ejs
    })
    .catch(err => {
        console.log("### product.findAll by ID 에러 ###")
        console.log(err);
    });
    /*
    PRODUCT.findByPk(productId)
    .then((result) => { // 이 경우에는 한 개만 반환해서 ejs 수정 필요
        res.render('edit-product', {
            prods: result,
            pageTitle: 'Edit Product',
            path: '/admin/edit-product'
        }); // views/edit-product.ejs
    })
    .catch(err => {
        console.log("### product.findAll by ID 에러 ###")
        console.log(err);
    });
    */
}

function postEditProduct (req, res, next) { // 상품 수정
    const productId = req.params.productId;
    PRODUCT.update({
        title: req.body.title,
        cost: req.body.cost,
        imgURL: req.body.imgURL,
        description: req.body.description,
        stock: req.body.stock,
        category: req.body.category
    }, {where : {id : productId}})
    .then((result) => {
        console.log("### product.update 성공 ###");
        res.redirect('/admin/edit-delete-product');
    })
    .catch(err => {
        console.log("### product.update 에러 ###")
        console.log(err);
    });
}

function postDeleteProduct (req, res, next) { // 상품 삭제
    const productId = req.params.productId;
    PRODUCT.destroy({where : {id : productId}})
    .then((result) => {
        console.log("### product.destroy 성공 ###");
        res.redirect('/admin/edit-delete-product');
    })
    .catch(err => {
        console.log("### product.destroy 에러 ###")
        console.log(err);
    });
}

module.exports = {
    getAddProduct,
    postAddProduct,
    getEditDeleteProduct,
    getEditProduct,
    postEditProduct,
    postDeleteProduct
};