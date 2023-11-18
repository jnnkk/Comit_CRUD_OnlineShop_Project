const express = require('express');
const router = express.Router();

router.get('/buy', (req, res, next) => {
    res.render('buy', {pageTitle: 'You are consumer', path: '/buy'});
});

module.exports = router;