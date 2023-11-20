const USER = require('../models/user');

function getSignup(req, res, next) { // 회원가입 페이지 렌더링
    res.render('signup', {
        pageTitle: 'Signup',
        path: '/signup'
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
        path: '/login'
    }); // views/login.ejs
}

function postLogin(req, res, next) { // 로그인 처리
    const userid = req.body.id;
    const userpassword = req.body.password;
    return USER.findAll({
        where: {
            userid: userid,
            userpassword: userpassword
        }
    })
    .then(user => {
        if (user.length > 0) {
            // 세션에 로그인 정보 저장
            req.session.isLoggedIn = true;
            req.session.user = user[0];
            req.session.save(err => {
                console.log('### postLogin() error ###');
                console.log(err);
            });
        }
        else {
            console.log('### postLogin() error ###');
            console.log('아이디 또는 비밀번호가 일치하지 않습니다.');
            res.redirect('/login');
        }
    })
}

module.exports = {
    getSignup,
    postSignup,
}