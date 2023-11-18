const express = require('express');
const router = express.Router();

const productController = require('../controllers/product-controller');

router.get('/', productController.getBuyProduct);

module.exports = router;
