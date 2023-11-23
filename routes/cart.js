const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart-controller');

// /cart => GET
router.get('/cart', cartController.getCart);

// /cart/add-cart-product => POST
router.post('/cart/add-cart-product/:productId', cartController.postAddCartProduct);

// /cart/delete-cart-product => POST
router.post('/cart/delete-cart-product/:productId', cartController.postDeleteCartProduct);

// /cart/upcount-cart-product => POST
router.post('/cart/upcount-cart-product/:productId', cartController.postUpcountCartProduct);

// /cart/downcount-cart-product => POST
router.post('/cart/downcount-cart-product/:productId', cartController.postDowncountCartProduct);

exports.routes = router;