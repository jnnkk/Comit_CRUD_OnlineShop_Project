const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop-controller');

// / => GET
router.get('/', shopController.getMainShop);

exports.routes = router;