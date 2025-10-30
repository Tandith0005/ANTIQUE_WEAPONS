const express = require('express');
const { sell } = require('../controllers/sellControllers');
const router = express.Router();

router.post('/', sell)


module.exports = router;