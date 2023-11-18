function getBuy (req, res, next) {
    res.render('buy', {pageTitle: 'BUY', path: '/buy'});
}

module.exports = {
    getBuy
};