const express = require('express');
const { getWeaponDetails } = require('../controllers/weaponDetailsController');

const router = express.Router();

router.get('/:id', getWeaponDetails);

module.exports = router;