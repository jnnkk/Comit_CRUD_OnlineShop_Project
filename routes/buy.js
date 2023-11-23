const express = require('express');
const router = express.Router();

const buyController = require('../controllers/buy-controller');

// /buy => GET
router.get('/buy/:productId', buyController.getBuy);

exports.routes = router;