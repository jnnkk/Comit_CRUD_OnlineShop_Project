const express = require('express');
const router = express.Router();

const authenController = require('../controllers/authen-controller');

// /signup => GET
router.get('/signup', authenController.getSignup);

// /signup => POST
router.post('/signup', authenController.postSignup);

// /login => GET
router.get('/login', );
// /login => POST
router.post('/login', );

exports.routes = router;