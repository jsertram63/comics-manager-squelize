const express = require('express');

const bookStoreController = require('../controllers/bookstore');

const router = express.Router();

router.get('/', bookStoreController.getIndex);


module.exports = router;
