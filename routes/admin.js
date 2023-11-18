const express = require('express');
const router = express.Router();

const adminController = require('../controllers/product-controller');

const products = [];

// /admin/add-product => GET
router.get('/add-product', adminController.getAdminProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAdminProduct);

exports.routes = router;
exports.products = products;