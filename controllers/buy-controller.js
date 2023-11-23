const PRODUCT = require('../models/product');
const CART = require('../models/cart');
const Sequelize = require('sequelize');

function getBuy (req, res, next) { // 구매 페이지 렌더링
    const prodId = req.params.productId;
    PRODUCT.update({ // 구매한 상품의 stock을 1 감소
        stock: Sequelize.literal('stock - 1')
    }, {
        where: {
            id: prodId
        }
    }).then(() => {
        CART.update({ // 구매한 상품의 count를 1 감소
            count: Sequelize.literal('count - 1')
        }, {
            where: {
                userUserid: req.session.user,
                productId: prodId
            }
        }).then(() => {
            CART.destroy({ // count가 0이 된 상품은 장바구니에서 삭제
                where: {
                    count: 0
                }
            }).then(() => {
                res.render('buy', {
                    pageTitle: 'BUY',
                    path: '/buy',
                    isAuthen: req.session.isLoggedIn,
                    username: req.session.user,
                    isAdmin: req.session.isAdmin
                });
            });
        });
    });
}

module.exports = {
    getBuy
};