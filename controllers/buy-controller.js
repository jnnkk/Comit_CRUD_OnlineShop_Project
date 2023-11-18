function getBuy (req, res, next) {
    res.render('buy', {pageTitle: 'You are consumer', path: '/buy'});
}

module.exports = {
    getBuy
};