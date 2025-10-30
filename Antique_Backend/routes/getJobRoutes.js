const express = require('express');
const { getJobs } = require('../controllers/getJobsController');
const router = express.Router();

router.get('/', getJobs);

module.exports = router;


