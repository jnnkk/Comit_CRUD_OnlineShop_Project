function getBuy (req, res, next) { // 구매 페이지 렌더링
    res.render('buy', {
        pageTitle: 'BUY',
        path: '/buy',
        isAuthen: req.session.isLoggedIn,
        username: req.session.user,
        isAdmin: req.session.isAdmin
    });
}

module.exports = {
    getBuy
};