const router = require('express').Router();
const authController = require('../Controller/AuthController/authController');
const reportController = require('../Controller/ReportsController/reportsController');

router.get('/', reportController.getSalesData);

module.exports = router;


