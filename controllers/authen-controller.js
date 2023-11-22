const USER = require('../models/user');
// const Sequelize = require('sequelize');

function getSignup(req, res, next) { // 회원가입 페이지 렌더링
    res.render('signup', {
        pageTitle: 'Signup',
        path: '/signup',
        isAuthen: req.session.isLoggedIn,
        username: req.session.user,
        isAdmin: req.session.isAdmin
    }); // views/signup.ejs
}

function postSignup(req, res, next) { // 회원가입 처리
    const userid = req.body.id;
    return USER.findByPk(userid)
    .then(user => {
        if (!user) {
            const userid = req.body.id;
            const userpassword = req.body.password;
            const username = req.body.name;
            const isadmin = false;
            USER.create({
                userid: userid,
                userpassword: userpassword,
                username: username,
                isadmin: isadmin
            });
            res.redirect('/');
        }
        else {
            console.log('### postSignup() error ###');
            console.log('이미 존재하는 아이디입니다.');
            res.redirect('/signup');
        }
    })
    .catch(err => {
        console.log('### postSignup() error ###');
        console.log(err);
    });
}

function getLogin(req, res, next) { // 로그인 페이지 렌더링
    res.render('login', {
        pageTitle: 'Login',
        path: '/login',
        isAuthen: req.session.isLoggedIn,
        username: req.session.user,
        isAdmin: req.session.isAdmin
    }); // views/login.ejs
}

function postLogin(req, res, next) { // 로그인 처리
    const userid = req.body.id;
    const userpassword = req.body.password;
    USER.findByPk(userid)
        .then(user => {
            if (!user) {
                console.log('### postLogin() error ###');
                console.log('아이디가 존재하지 않습니다.');
                res.redirect('/login');
            }
            else if (user.userpassword !== userpassword) {
                console.log('### postLogin() error ###');
                console.log('비밀번호가 일치하지 않습니다.');
                res.redirect('/login');
            }
            else {
                req.session.isLoggedIn = true;
                req.session.user = user.username;
                req.session.isAdmin = user.isadmin;
                req.session.save(() => { 
                    res.redirect('/');
                });
            }
        })
        .catch(err => {
            console.log('### postLogin() error ###');
            console.log(err);
        });
}

function getLogout(req, res, next) { // 로그아웃 처리
    req.session.destroy(err => {
        console.log('### getLogout() error ###');
        console.log(err);
        res.redirect('/');
    });
}

module.exports = {
    getSignup,
    postSignup,
    getLogin,
    postLogin,
    getLogout
}