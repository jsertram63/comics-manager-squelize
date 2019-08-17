const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

// /admin/add-category => GET
router.get('/add-category', adminController.getAddCategory);
// /admin/add-category => POST
router.post('/add-category', adminController.postAddCategory);
// /admin/products => GET
//router.get('/categories', adminController.getCategories);
router.get('/add-comics', adminController.getAddComics);
router.post('/add-comics', adminController.postAddComics);

module.exports = router;