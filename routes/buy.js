const express = require('express');
const router = express.Router();

// /buy => GET
router.get('/buy', (req, res, next) => {
    res.render('buy', {pageTitle: 'You are consumer', path: '/buy'});
});

exports.routes = router;