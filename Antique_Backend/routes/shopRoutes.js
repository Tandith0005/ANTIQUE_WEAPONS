const express = require('express');
const { getAllItem } = require('../controllers/shopControllers');
const router = express.Router();

router.get('/', getAllItem);

module.exports = router;
