const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin-controller');

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

/*************************************************************************/

// /admin/edit-delete-product => GET
router.get('/edit-delete-product', adminController.getEditDeleteProduct);

// /admin/edit-product => GET
router.get('/edit-product/:productId', adminController.getEditProduct);

// /admin/edit-product => POST
router.post('/edit-product/:productId', adminController.postEditProduct);

// /admin/delete-product => POST
router.post('/delete-product/:productId', adminController.postDeleteProduct);

exports.routes = router;