const router = require('express').Router();
const cors = require("cors");
const authController = require('../Controller/AuthController/authController');
const ordersController = require('../Controller/OrsersController/ordersController');


const confirmOrder = cors({
    origin: "http://13.126.158.22:3000",
    methods: 'GET'
});

// For Shoppers
router.post('/create', authController.verifyAndAuthorizeShopper, ordersController.createOrder);
router.put('/cancel:id', authController.verifyAndAuthorizeShopper, ordersController.cancelOrder);
router.get('/getbyid:id', authController.verifyAndAuthorizeShopper, ordersController.getOrdersById);
router.get("/confirm:id", confirmOrder, ordersController.confirmOrder);


// For Seller
// Admin Will get All Orders 
router.get('/getorders', ordersController.getAllOrders);
router.get('/sales', ordersController.sales);

module.exports = router;