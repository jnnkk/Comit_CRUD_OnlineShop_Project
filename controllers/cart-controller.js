const CART = require('../models/cart');
const PRODUCT = require('../models/product');
const Sequelize = require('sequelize');

function getCart (req, res, next) { // 장바구니 페이지 렌더링
    CART.findAll({where : {userUserid : req.session.user}})
    .then((result) => {
        let totalCost = 0;
        let totalCount = 0;

        for (let item of result) {
            totalCost += item.cost * item.count;
            totalCount += item.count;
        }

        res.render('cart', {
            prods: result,
            pageTitle: 'Cart',
            path: '/cart',
            isAuthen: req.session.isLoggedIn,
            username: req.session.user,
            isAdmin: req.session.isAdmin,
            totalCost: totalCost,
            totalCount: totalCount
        }); // views/cart.ejs
    })
    .catch(err => {
        console.log("### cart.findAll 에러 ###")
        console.log(err);
    });
}

function postAddCartProduct (req, res, next) { // 상품 수정 페이지 렌더링
    const productId = req.params.productId;
    PRODUCT.findAll({where : {id : productId}})
    .then((result) => {
        CART.findAll({where : {userUserid : req.session.user, productId : productId}})
        .then((result2) => {
            if(result2.length == 0) {
                CART.create({
                    count: 1,
                    title: result[0].title,
                    cost: result[0].cost,
                    imgURL: result[0].imgURL,
                    description: result[0].description,
                    stock: result[0].stock,
                    category: result[0].category,
                    userUserid: req.session.user,
                    productId: productId
                })
                .then((result3) => {
                    res.redirect('/cart');
                })
                .catch(err => {
                    console.log("### cart.create 에러 ###")
                    console.log(err);
                });
            } else {
                CART.update({count: result2[0].count + 1}, {where: {userUserid : req.session.user, productId : productId}})
                .then((result3) => {
                    res.redirect('/cart');
                })
                .catch(err => {
                    console.log("### cart.update 에러 ###")
                    console.log(err);
                });
            }
        })
    })
    .catch(err => {
        console.log("### product.findAll by ID 에러 ###")
        console.log(err);
    });
}

function postDeleteCartProduct (req, res, next) {
    const productId = req.params.productId;
    CART.destroy({where : {userUserid : req.session.user, productId : productId}})
    .then((result) => {
        res.redirect('/cart');
    })
    .catch(err => {
        console.log("### cart.destroy 에러 ###")
        console.log(err);
    });
}

function postUpcountCartProduct (req, res, next) {
    const productId = req.params.productId;
    CART.findOne({where : {userUserid : req.session.user, productId : productId}})
    .then((result) => {
        if(result.count < result.stock) {
            CART.update({count: Sequelize.literal('count + 1')}, {where: {userUserid : req.session.user, productId : productId}})
            .then((result2) => {
                res.redirect('/cart');
            })
            .catch(err => {
                console.log("### cart.update 에러 ###")
                console.log(err);
            });
        } else {
            res.redirect('/cart');
        }
    })
}

function postDowncountCartProduct (req, res, next) {
    const productId = req.params.productId;
    CART.findOne({where : {userUserid : req.session.user, productId : productId}})
    .then((result) => {
        if(result.count > 1) {
            CART.update({count: Sequelize.literal('count - 1')}, {where: {userUserid : req.session.user, productId : productId}})
            .then((result2) => {
                res.redirect('/cart');
            })
            .catch(err => {
                console.log("### cart.update 에러 ###")
                console.log(err);
            });
        } else if (result.count == 1) {
            CART.destroy({where : {userUserid : req.session.user, productId : productId}})
            .then((result2) => {
                res.redirect('/cart');
            })
            .catch(err => {
                console.log("### cart.destroy 에러 ###")
                console.log(err);
            });
        } else {
            res.redirect('/cart');
        }
    })
}

module.exports = {
    getCart,
    postAddCartProduct,
    postDeleteCartProduct,
    postUpcountCartProduct,
    postDowncountCartProduct
}