const router = require('express').Router();
const authControler = require('../Controller/AuthController/authController');
const ordersController = require('../Controller/OrsersController/ordersController');


router.get('/', (req, res) => {
    res.status(403).json({
        message : "You are not suthorized to sccess this resource"
    })
});

module.exports = router;