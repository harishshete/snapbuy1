const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const paymentsController = require('../Controller/PaymentsController/paymentsController');


router.get('/getpaymentdetails', paymentsController.getPaymentDetails);


module.exports = router;
