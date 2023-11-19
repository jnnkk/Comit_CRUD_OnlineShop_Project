function getBuy (req, res, next) { // 구매 페이지 렌더링
    res.render('buy', {pageTitle: 'BUY', path: '/buy'});
}

module.exports = {
    getBuy
};