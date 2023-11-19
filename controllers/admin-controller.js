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

function getEditDeleteProduct (req, res, next) { // 상품 수정, 삭제 페이지 렌더링
    PRODUCT.selectAll()
    .then(([rows]) => {
        res.render('edit-delete-product', {
            prods: rows,
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
    PRODUCT.find(productId)
    .then(([rows]) => {
        res.render('edit-product', {
            prods: rows,
            pageTitle: 'Edit Product',
            path: '/admin/edit-product'
        }); // views/edit-product.ejs
    })
    .catch(err => {
        console.log("### product.find 에러 ###")
        console.log(err);
    });
}


module.exports = {
    getAddProduct,
    postAddProduct,
    getEditDeleteProduct,
    getEditProduct
};