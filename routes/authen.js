const express = require('express');
const router = express.Router();

const authenController = require('../controllers/authen-controller');

// /signup => GET
router.get('/signup', authenController.getSignup);

// /signup => POST
router.post('/signup', authenController.postSignup);

// /login => GET
router.get('/login', authenController.getLogin);

// /login => POST
router.post('/login', authenController.postLogin);

// /logout => GET
router.get('/logout', authenController.getLogout);

exports.routes = router;