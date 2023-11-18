const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin-controller');

// /admin/add-product => GET
router.get('/add-product', adminController.getAdminProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAdminProduct);

/*************************************************************************/

// /admin/edit-delete-product => GET
router.get('/edit-delete-product', );

// /admin/edit-product => POST
router.post('/edit-product', );

// /admin/delete-product => POST
router.post('/delete-product', );

exports.routes = router;